import { useState, useRef } from 'react';
import { BiodataFormData } from '@/types/biodata';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import TraditionalTemplate from './templates/TraditionalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import RoyalTemplate from './templates/RoyalTemplate';
import { templates } from '@/data/templates';

interface BiodataPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BiodataFormData;
  selectedTemplate: string;
  onChangeTemplate: (id: string) => void;
}

// API base URL - uses environment variable for production, falls back to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:7071';

const BiodataPreview = ({ open, onOpenChange, data, selectedTemplate, onChangeTemplate }: BiodataPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'traditional':
        return <TraditionalTemplate data={data} />;
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'elegant':
        return <ElegantTemplate data={data} />;
      case 'royal':
        return <RoyalTemplate data={data} />;
      default:
        return <TraditionalTemplate data={data} />;
    }
  };

  const currentIndex = templates.findIndex((t: { id: string }) => t.id === selectedTemplate);
  
  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? templates.length - 1 : currentIndex - 1;
    onChangeTemplate(templates[newIndex].id);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex === templates.length - 1 ? 0 : currentIndex + 1;
    onChangeTemplate(templates[newIndex].id);
  };

  // Map frontend template IDs to backend template names
  const getBackendTemplateName = (templateId: string): string => {
    const templateMap: Record<string, string> = {
      'traditional': 'template1',
      'modern': 'template2',
      'elegant': 'template4',
      'royal': 'template6',
    };
    return templateMap[templateId] || 'template1';
  };

  // Convert frontend form data to backend format
  const convertToBackendFormat = (formData: BiodataFormData) => {
    return {
      name: formData.fullName,
      dateOfBirth: formData.dateOfBirth,
      timeOfBirth: formData.birthTime,
      city: formData.city || formData.birthPlace,
      religion: formData.religion,
      caste: formData.caste,
      gotra: formData.gotra,
      height: formData.height,
      complexion: formData.complexion,
      education: formData.education,
      occupation: formData.occupation,
      company: formData.company,
      income: formData.income,
      fatherName: formData.fatherName,
      fatherOccupation: formData.fatherOccupation,
      motherName: formData.motherName,
      motherOccupation: formData.motherOccupation,
      siblings: `${formData.brothers} Brother(s), ${formData.sisters} Sister(s)`,
      address: formData.address,
      state: formData.state,
      country: formData.country,
      phone: formData.phone,
      email: formData.email,
      aboutMe: formData.aboutMe,
      partnerExpectations: formData.partnerExpectations,
      rashi: '',
      nakshatra: '',
      manglik: formData.manglik,
    };
  };

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Try backend PDF generation first
      const backendData = convertToBackendFormat(data);
      const templateName = getBackendTemplateName(selectedTemplate);
      
      const response = await fetch(`${API_BASE_URL}/api/generate-pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          biodata: backendData,
          template: templateName
        })
      });

      if (response.ok) {
        // Download the PDF from backend
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${data.fullName || 'biodata'}_${selectedTemplate}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback to browser print
        fallbackPrint();
      }
    } catch (error) {
      console.error('Backend PDF generation failed, using print fallback:', error);
      fallbackPrint();
    } finally {
      setIsDownloading(false);
    }
  };

  const fallbackPrint = () => {
    // Fallback: Use browser print functionality
    const printContent = previewRef.current;
    if (!printContent) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Marriage Biodata - ${data.fullName || 'Download'}</title>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Playfair Display', serif; }
            @media print {
              body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
          <script>
            window.onload = function() { 
              setTimeout(function() {
                window.print(); 
                window.close(); 
              }, 500);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-4 border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <DialogTitle className="font-serif text-xl">Preview Your Biodata</DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="h-8 w-8"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[100px] text-center">
                {templates.find((t: { id: string }) => t.id === selectedTemplate)?.name}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="h-8 w-8"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-4 bg-gray-100">
          <div 
            ref={previewRef}
            className="mx-auto shadow-lg"
            style={{ width: '210mm', minHeight: '297mm' }}
          >
            {renderTemplate()}
          </div>
        </div>
        
        <div className="p-4 border-t bg-muted/30 flex justify-center gap-4">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-primary hover:bg-burgundy-dark text-white px-8"
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BiodataPreview;

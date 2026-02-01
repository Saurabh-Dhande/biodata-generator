import { useState, useRef, useEffect } from 'react';
import { BiodataFormData, TemplateType } from '@/types/biodata';
import { defaultBiodata } from '@/data/templates';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TemplateGallery from '@/components/TemplateGallery';
import BiodataForm from '@/components/BiodataForm';
import BiodataPreview from '@/components/BiodataPreview';
import { Users } from 'lucide-react';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('traditional');
  const [formData, setFormData] = useState<BiodataFormData>(defaultBiodata);
  const [showPreview, setShowPreview] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  // Visitor counter - using localStorage to persist count
  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : 0;
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  const handleGetStarted = () => {
    const templatesSection = document.getElementById('templates');
    templatesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
  };

  const handlePreviewTemplate = (template: TemplateType) => {
    setSelectedTemplate(template.id);
    setShowPreview(true);
  };

  const handleUpdateForm = (data: Partial<BiodataFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onGetStarted={handleGetStarted} />
      
      <main className="pt-16">
        <Hero onGetStarted={handleGetStarted} />
        
        <TemplateGallery
          selectedTemplate={selectedTemplate}
          onSelectTemplate={handleSelectTemplate}
          onPreviewTemplate={handlePreviewTemplate}
        />
        
        <div ref={formRef}>
          <BiodataForm
            formData={formData}
            onUpdateForm={handleUpdateForm}
            onPreview={handlePreview}
          />
        </div>
      </main>
      
      <BiodataPreview
        open={showPreview}
        onOpenChange={setShowPreview}
        data={formData}
        selectedTemplate={selectedTemplate}
        onChangeTemplate={setSelectedTemplate}
      />
      
      {/* Footer */}
      <footer className="py-8 bg-foreground text-primary-foreground relative">
        {/* Visitor Counter - Left Corner */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium">{visitorCount.toLocaleString()} Visitors</span>
        </div>
        
        <div className="container px-4 text-center">
          <p className="text-sm opacity-80">
            © 2026 BiodataMaker. Create beautiful marriage biodata with love.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { templates } from '@/data/templates';
import { TemplateType } from '@/types/biodata';
import TemplateCard from './TemplateCard';
import { Sparkles } from 'lucide-react';

interface TemplateGalleryProps {
  selectedTemplate: string;
  onSelectTemplate: (id: string) => void;
  onPreviewTemplate: (template: TemplateType) => void;
}

const TemplateGallery = ({ selectedTemplate, onSelectTemplate, onPreviewTemplate }: TemplateGalleryProps) => {
  return (
    <section id="templates" className="py-20 bg-gradient-to-b from-background to-cream-dark/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Choose Your Style</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beautiful Templates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select from our collection of professionally designed biodata templates. 
            Each template is crafted to make a lasting impression.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              onSelect={onSelectTemplate}
              onPreview={onPreviewTemplate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;

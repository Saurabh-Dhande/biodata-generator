import { TemplateType } from '@/types/biodata';
import { Check, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateCardProps {
  template: TemplateType;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onPreview: (template: TemplateType) => void;
}

const themeColors = {
  traditional: 'from-primary/20 to-primary/5 border-primary/30',
  modern: 'from-muted to-background border-muted-foreground/20',
  elegant: 'from-gold/20 to-gold/5 border-gold/40',
  royal: 'from-pink-100 to-rose-50 border-pink-300',
};

const themeIcons = {
  traditional: '🪷',
  modern: '✨',
  elegant: '👑',
  royal: '🌸',
};

const TemplateCard = ({ template, isSelected, onSelect, onPreview }: TemplateCardProps) => {
  return (
    <div
      className={cn(
        'group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer',
        'border-2 bg-gradient-to-br shadow-card hover:shadow-elegant',
        themeColors[template.theme],
        isSelected && 'ring-2 ring-primary ring-offset-2 ring-offset-background'
      )}
      onClick={() => onSelect(template.id)}
    >
      {/* Preview Area */}
      <div className="aspect-[3/4] p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-current m-4 rounded-lg" />
          <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-current rounded-lg border-dashed" />
        </div>
        
        {/* Template Icon */}
        <span className="text-6xl mb-4">{themeIcons[template.theme]}</span>
        
        {/* Mock Content Lines */}
        <div className="space-y-2 w-full max-w-[80%]">
          <div className="h-4 bg-foreground/10 rounded-full w-3/4 mx-auto" />
          <div className="h-3 bg-foreground/5 rounded-full w-1/2 mx-auto" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-2 bg-foreground/5 rounded-full" />
            <div className="h-2 bg-foreground/5 rounded-full" />
            <div className="h-2 bg-foreground/5 rounded-full" />
            <div className="h-2 bg-foreground/5 rounded-full" />
          </div>
        </div>
        
        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-scale-in">
            <Check className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
        
        {/* Preview Button - On Hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview(template);
          }}
          className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <span className="flex items-center gap-2 px-4 py-2 bg-background rounded-full text-foreground font-medium shadow-lg">
            <Eye className="w-4 h-4" />
            Preview
          </span>
        </button>
      </div>
      
      {/* Template Info */}
      <div className="p-4 bg-background/80 backdrop-blur-sm">
        <h3 className="font-serif text-lg font-semibold text-foreground">{template.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
      </div>
    </div>
  );
};

export default TemplateCard;

import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-cream-dark opacity-50" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 20H50L38 30L43 45L30 35L17 45L22 30L10 20H25L30 5Z' fill='%23722F37' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-primary">Create Beautiful Biodata</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Perfect{' '}
            <span className="text-primary relative">
              Marriage Biodata
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 10 Q50 0 100 10 Q150 20 200 10" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Create stunning marriage biodata with beautiful templates. 
            Simply fill your details, upload your photo, and download your personalized biodata.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-primary hover:bg-burgundy-dark text-primary-foreground px-8 py-6 text-lg font-semibold shadow-elegant transition-all hover:scale-105 hover:shadow-gold"
            >
              <Heart className="w-5 h-5 mr-2" />
              Create Your Biodata
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onGetStarted}
              className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 text-lg font-semibold"
            >
              View Templates
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-primary">4+</span>
              <span className="text-sm">Beautiful<br />Templates</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-gold">Free</span>
              <span className="text-sm">To Create<br />& Download</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-primary">Easy</span>
              <span className="text-sm">Simple<br />Process</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onGetStarted: () => void;
}

const Header = ({ onGetStarted }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">BiodataMaker</span>
          </a>
          
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#form" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Create
            </a>
          </nav>
          
          {/* CTA */}
          <Button 
            onClick={onGetStarted}
            className="bg-primary hover:bg-burgundy-dark text-primary-foreground shadow-elegant"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

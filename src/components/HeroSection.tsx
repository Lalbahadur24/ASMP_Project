
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, UserCheck } from 'lucide-react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const setHeroHeight = () => {
      if (heroRef.current) {
        const windowHeight = window.innerHeight;
        heroRef.current.style.height = `${windowHeight}px`;
      }
    };
    
    setHeroHeight();
    window.addEventListener('resize', setHeroHeight);
    
    return () => {
      window.removeEventListener('resize', setHeroHeight);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative flex items-center overflow-hidden bg-gradient-to-r from-background to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/3 h-64 w-64 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <div className="space-y-3 max-w-xl">
              <Badge className="px-3 py-1 rounded-full bg-accent text-accent-foreground inline-flex items-center gap-1 mb-2 animate-scale-in">
                <span className="text-xs font-medium">AI-Powered Recommendations</span>
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Find Your Perfect Student Accommodation
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover the ideal place to stay during your studies with our AI-powered accommodation finder. Personalized recommendations based on your preferences.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <span className="block text-xl font-bold">1,200+</span>
                  <span className="text-sm text-muted-foreground">Verified Properties</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <span className="block text-xl font-bold">4.8/5</span>
                  <span className="text-sm text-muted-foreground">User Ratings</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                <div>
                  <span className="block text-xl font-bold">15,000+</span>
                  <span className="text-sm text-muted-foreground">Happy Students</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => navigate('/listings')}
              >
                Explore Listings
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/about')}
              >
                How It Works
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Modern student accommodation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6">
                <div className="bg-background rounded-xl shadow-xl p-4 max-w-xs animate-slide-in-bottom">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Happy student" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">Sarah T.</div>
                      <div className="text-xs text-muted-foreground">Computer Science Student</div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">
                    "The AI recommendations were spot on! Found my perfect room in just one day."
                  </p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl transform rotate-3 scale-95 blur-sm"></div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mt-12 lg:mt-20 relative z-20 animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

// Badge component for Hero Section
const Badge = ({ children, className, ...props }: any) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default HeroSection;

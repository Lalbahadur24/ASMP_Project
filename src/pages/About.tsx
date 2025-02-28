
import { useEffect } from 'react';
import { ArrowRight, BookOpen, CheckCircle, School, Home, Building, UserCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">How AccomFind Works</h1>
          <p className="text-muted-foreground text-lg">
            Our AI-powered platform makes finding your ideal student accommodation easier than ever before.
            Here's how we're revolutionizing the student housing experience.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-background rounded-xl p-8 shadow-sm border border-border flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
            <p className="text-muted-foreground">
              Sign up and create your student profile. Tell us about your budget, preferences, and needs to help our AI understand what you're looking for.
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-sm border border-border flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse AI Recommendations</h3>
            <p className="text-muted-foreground">
              Our algorithm provides personalized accommodation suggestions based on your profile, location preferences, and budget constraints.
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-sm border border-border flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Your New Home</h3>
            <p className="text-muted-foreground">
              Chat with property owners, schedule visits, and securely complete your booking online - all through our platform.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                <p className="text-muted-foreground">
                  Every accommodation on our platform is verified by our team to ensure quality, safety, and accurate information.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Recommendations</h3>
                <p className="text-muted-foreground">
                  Our machine learning algorithm learns from your preferences to provide increasingly accurate suggestions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zero Brokerage</h3>
                <p className="text-muted-foreground">
                  Connect directly with property owners and never pay brokerage fees again, saving you thousands.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
                <p className="text-muted-foreground">
                  View properties remotely with 360° virtual tours and high-quality images before scheduling in-person visits.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-muted-foreground">
                  Our escrow payment system ensures your money is secure until you confirm satisfaction with your accommodation.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our customer support team is always available to help with any issues or questions you might have.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">How is AccomFind different from other platforms?</h3>
              <p className="text-muted-foreground">
                AccomFind uses AI to provide personalized recommendations based on your preferences. We also verify all listings and charge zero brokerage fees.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">Are all accommodations on AccomFind verified?</h3>
              <p className="text-muted-foreground">
                Yes, our team verifies each property to ensure it meets our quality and safety standards before listing it on our platform.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">How do I contact a property owner?</h3>
              <p className="text-muted-foreground">
                Once you find a property you're interested in, you can chat directly with the owner through our in-app messaging system.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">Is there a fee to use AccomFind?</h3>
              <p className="text-muted-foreground">
                AccomFind is completely free for students. We never charge brokerage fees, and you only pay for your accommodation.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Student Home?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of students who have already found their ideal accommodation through AccomFind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Sign Up Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/listings">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

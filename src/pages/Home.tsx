
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import RoomCard from '../components/RoomCard';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Brain, 
  MessageCircle, 
  Search, 
  Shield,
  MapPin, 
  CreditCard, 
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';
import durgeshImg from "../assest/durgesh.png";
import awanishpic from "../assest/awanish.png";
import vadodpic from "../assest/vadodarapic.png";
import bangImg from "../assest/bagalore.png";
import puneImg from '../assest/pune.png';
import hyImg from '../assest/Hyderabad.png';


// Mock data for featured properties
const featuredProperties = [
  {
    id: '1',
    title: 'Modern PG near North Campus',
    location: 'Vadodara, Gujarat',
    price: 12000,
    rating: 4.8,
    reviewCount: 120,
    image: vadodpic,
    amenities: ['WiFi', 'AC', 'Furnished', 'Laundry'],
    type: 'PG',
    isNew: true
  },
  {
    id: '2',
    title: 'Spacious 2BHK Apartment',
    location: 'Koramangala, Bangalore',
    price: 22000,
    rating: 4.6,
    reviewCount: 85,
    image: bangImg,
    amenities: ['WiFi', 'AC', 'Furnished', 'Parking', 'Security'],
    type: '2 BHK',
  },
  {
    id: '3',
    title: 'Luxury Studio Apartment',
    location: 'Viman Nagar, Pune',
    price: 18000,
    rating: 4.7,
    reviewCount: 64,
    image: puneImg,
    amenities: ['WiFi', 'AC', 'Gym', 'Kitchen', 'Parking'],
    type: 'Studio',
    isNew: true
  },
  {
    id: '4',
    title: 'Affordable Hostel for Students',
    location: 'Ameerpet, Hyderabad',
    price: 8000,
    rating: 4.3,
    reviewCount: 102,
    image: hyImg,
    amenities: ['WiFi', 'Laundry', 'Security', 'Kitchen'],
    type: 'Hostel',
  }
];

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Properties */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Discover our handpicked accommodations for students</p>
            </div>
            <Link to="/listings">
              <Button variant="outline" className="mt-4 md:mt-0 gap-2 hover:bg-primary hover:text-white">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {featuredProperties.map((property, index) => (
              <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <RoomCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How AccomFind Works</h2>
            <p className="text-muted-foreground">
              Finding your ideal student accommodation is now easier than ever with our AI-powered platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border flex flex-col items-start hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
              <p className="text-muted-foreground mb-4">
                Use our advanced search filters to find accommodations that match your preferences, budget, and location.
              </p>
              <div className="pt-2 mt-auto">
                <div className="flex gap-2 items-center text-sm font-medium text-primary">
                  <MapPin className="h-4 w-4" />
                  <span>Location-based search</span>
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-primary mt-1">
                  <CreditCard className="h-4 w-4" />
                  <span>Budget filtering</span>
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-primary mt-1">
                  <Building className="h-4 w-4" />
                  <span>Property type options</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border flex flex-col items-start hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Our AI engine analyzes your preferences and search patterns to recommend the perfect accommodations for you.
              </p>
              <div className="pt-2 mt-auto">
                <div className="flex gap-2 items-center text-sm font-medium text-primary">
                  <span>Personalized suggestions</span>
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-primary mt-1">
                  <span>Learning your preferences</span>
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-primary mt-1">
                  <span>Smart matching algorithm</span>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border flex flex-col items-start hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Book</h3>
              <p className="text-muted-foreground mb-4">
                Chat directly with property owners, schedule visits, and securely book your new accommodation online.
              </p>
              <div className="pt-2 mt-auto">
                <div className="flex gap-2 items-center text-sm font-medium text-primary">
                  <span>Direct messaging</span>
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-primary mt-1">
                  <span>Secure online payments</span>
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-primary mt-1">
                  <span>Booking confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Students Say</h2>
            <p className="text-muted-foreground">
              Thousands of students have found their perfect accommodation using our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-t-4 border-primary border animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={durgeshImg}
                  alt="Student" 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h3 className="font-semibold">Durgesh Yadav</h3>
                  <p className="text-muted-foreground text-sm">Computer Science, Parul University</p>
                </div>
              </div>
              <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                "The AI recommendations were spot on! Found my perfect room in just one day. The interface was so intuitive and the chat feature made it easy to talk to landlords."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-t-4 border-primary border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={awanishpic} 
                  alt="Student" 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h3 className="font-semibold">Awanish Upadhyay</h3>
                  <p className="text-muted-foreground text-sm">Engineering, Parul Institute of Technology</p>
                </div>
              </div>
              <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                "As a new student in Vadodara, I was worried about finding a good place. AccomFind made it so simple! The verified listings gave me peace of mind, and I saved so much time."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-t-4 border-primary border animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Student" 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h3 className="font-semibold">Kana Ram Swami</h3>
                  <p className="text-muted-foreground text-sm">CSE, PIET</p>
                </div>
              </div>
              <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                "The no-brokerage policy saved me thousands! Plus, the detailed filters helped me find exactly what I needed - a furnished apartment near my campus with good security."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white dark:bg-gray-800 rounded-full size-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-muted-foreground">
                All properties are verified by our team to ensure they meet quality and safety standards.
              </p>
            </div>
            
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white dark:bg-gray-800 rounded-full size-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Brokerage</h3>
              <p className="text-muted-foreground">
                Never pay brokerage fees again. Connect directly with property owners and save money.
              </p>
            </div>
            
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white dark:bg-gray-800 rounded-full size-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer support team is always available to help you with any issues or questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden animate-fade-in">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your Perfect Student Accommodation?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of students who have already found their ideal living space through our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2 bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => window.location.href = '/signup'}
                >
                  Sign Up Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/20 hover:border-white"
                  onClick={() => window.location.href = '/listings'}
                >
                  Browse Listings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Star component for the testimonials
const Star = (props: any) => {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg>
};

export default Home;

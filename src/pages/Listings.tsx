
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import RoomCard from '../components/RoomCard';

// Mock data for listings
const allListings = [
  {
    id: '1',
    title: 'Modern PG near North Campus',
    location: 'Hudson Lane, Delhi',
    price: 12000,
    rating: 4.8,
    reviewCount: 120,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
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
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
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
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
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
    image: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
    amenities: ['WiFi', 'Laundry', 'Security', 'Kitchen'],
    type: 'Hostel',
  }
];

const Listings = () => {
  const navigate = useNavigate();
  const [listings] = useState(allListings);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4 -ml-3 flex items-center gap-1"
            onClick={() => navigate('/home')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold mb-2">Student Accommodations</h1>
          <p className="text-muted-foreground">
            Browse through our curated list of student-friendly accommodations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <RoomCard key={listing.id} {...listing} />
          ))}
        </div>
        
        {listings.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No listings found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later for new listings
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;

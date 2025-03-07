
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Building, Home, Hotel, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const SearchBar = ({ variant = "default" }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState([5000, 50000]);
  const [amenities, setAmenities] = useState<string[]>([]);

  const availableAmenities = [
    'WiFi', 'AC', 'Furnished', 'Gym', 'Parking', 'Laundry', 'Security', 'Kitchen'
  ];

  const toggleAmenity = (amenity: string) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter(a => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  const handleSearch = () => {
    // Build query params
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (budget.length === 2) {
      params.append('minPrice', budget[0].toString());
      params.append('maxPrice', budget[1].toString());
    }
    if (amenities.length > 0) {
      params.append('amenities', amenities.join(','));
    }

    // Navigate to listings page with filters
    navigate(`/listings?${params.toString()}`);
  };

  // For compact design on certain pages
  const isCompact = variant === "compact";

  return (
    <div className={`${isCompact ? 'p-3' : 'p-5'} rounded-xl bg-white dark:bg-gray-900 shadow-lg search-box-shadow ${isCompact ? 'max-w-4xl' : 'max-w-6xl'} w-full mx-auto`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            Location
          </label>
          <Select
            value={location}
            onValueChange={setLocation}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Use location">Use location</SelectItem>
              <SelectItem value="Vadodara">Vadodara</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            Property Type
          </label>
          <Select
            value={propertyType}
            onValueChange={setPropertyType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pg">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>PG/Hostel</span>
                </div>
              </SelectItem>
              <SelectItem value="1bhk">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>1 BHK</span>
                </div>
              </SelectItem>
              <SelectItem value="2bhk">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>2 BHK</span>
                </div>
              </SelectItem>
              <SelectItem value="3bhk">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>3 BHK</span>
                </div>
              </SelectItem>
              <SelectItem value="hotel">
                <div className="flex items-center gap-2">
                  <Hotel className="h-4 w-4" />
                  <span>Hotel/Apartment</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            Budget (₹{budget[0]} - ₹{budget[1]})
          </label>
          <Slider
            defaultValue={[5000, 50000]}
            max={100000}
            min={1000}
            step={1000}
            value={budget}
            onValueChange={setBudget}
            className="mt-4"
          />
        </div>

        {/* Amenities & Search Button */}
        <div className="space-y-2 flex flex-col justify-between">
          <div>
            <label className="text-sm font-medium">Amenities</label>
            <div className="flex flex-wrap gap-2 mt-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    {amenities.length > 0 ? `${amenities.length} selected` : "Add filters"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56">
                  <div className="space-y-2">
                    {availableAmenities.map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <button
                          onClick={() => toggleAmenity(amenity)}
                          className={`px-3 py-1 text-xs rounded-full mr-2 ${
                            amenities.includes(amenity)
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {amenity}
                        </button>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              {amenities.length > 0 && amenities.slice(0, 2).map((amenity) => (
                <Badge key={amenity} variant="outline" className="h-9">
                  {amenity}
                </Badge>
              ))}
              {amenities.length > 2 && (
                <Badge variant="outline" className="h-9">
                  +{amenities.length - 2} more
                </Badge>
              )}
            </div>
          </div>
          <Button 
            onClick={handleSearch} 
            className="w-full mt-1 gap-2"
          >
            <Search className="h-4 w-4" />
            {isCompact ? 'Search' : 'Find Accommodations'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

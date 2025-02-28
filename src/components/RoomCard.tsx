
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Wifi, Star, Clock } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface RoomCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  amenities: string[];
  type: string;
  isNew?: boolean;
}

const RoomCard = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  image,
  amenities,
  type,
  isNew = false
}: RoomCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/room/${id}`}>
      <Card className="room-card overflow-hidden border border-border h-full">
        <div className="relative property-image-container">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover property-image"
          />
          <Button
            size="icon"
            variant="outline"
            className="absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={toggleFavorite}
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </Button>
          {isNew && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                New
              </Badge>
            </div>
          )}
          <div className="absolute bottom-3 left-3">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-foreground">
              {type}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
              <span className="text-muted-foreground">({reviewCount})</span>
            </div>
          </div>
          <div className="flex items-start gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.slice(0, 3).map((amenity) => (
              <Badge key={amenity} variant="secondary" className="text-xs">
                {amenity === 'WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                {amenity}
              </Badge>
            ))}
            {amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{amenities.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-primary">₹{price.toLocaleString()}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <Button variant="outline" size="sm" className="animate-hover">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RoomCard;

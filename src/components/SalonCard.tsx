
import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SalonCardProps {
  salon: {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    distance: string;
    image: string;
    services: string[];
    priceRange: string;
    nextAvailable: string;
    address: string;
  };
  onBookNow: () => void;
}

const SalonCard = ({ salon, onBookNow }: SalonCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={salon.image}
          alt={salon.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {salon.priceRange}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary/90 text-white">
            <Clock className="h-3 w-3 mr-1" />
            {salon.nextAvailable}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {salon.name}
            </CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {salon.distance} • {salon.address}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{salon.rating}</span>
            <span className="text-muted-foreground">({salon.reviewCount})</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {salon.services.map((service) => (
            <Badge key={service} variant="outline" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>
        
        <Button 
          onClick={onBookNow}
          className="w-full salon-gradient text-white hover:opacity-90 transition-opacity"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default SalonCard;

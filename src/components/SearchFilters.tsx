
import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const SearchFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterOptions = {
    services: ["Haircut", "Hair Color", "Highlights", "Extensions", "Treatments", "Styling"],
    priceRange: ["$", "$$", "$$$", "$$$$"],
    rating: ["4+ Stars", "4.5+ Stars", "5 Stars"],
    availability: ["Available Today", "Available This Week", "Available Anytime"]
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="flex items-center space-x-4">
      {activeFilters.length > 0 && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Filters:</span>
          <div className="flex flex-wrap gap-1">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive hover:text-white"
                onClick={() => toggleFilter(filter)}
              >
                {filter} ×
              </Badge>
            ))}
          </div>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Filter className="h-4 w-4 mr-2" />
            Filters
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-white border shadow-lg">
          <DropdownMenuLabel>Filter Salons</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wide">
            Services
          </DropdownMenuLabel>
          {filterOptions.services.map((service) => (
            <DropdownMenuItem
              key={service}
              className="cursor-pointer"
              onClick={() => toggleFilter(service)}
            >
              <div className="flex items-center justify-between w-full">
                <span>{service}</span>
                {activeFilters.includes(service) && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wide">
            Price Range
          </DropdownMenuLabel>
          {filterOptions.priceRange.map((price) => (
            <DropdownMenuItem
              key={price}
              className="cursor-pointer"
              onClick={() => toggleFilter(price)}
            >
              <div className="flex items-center justify-between w-full">
                <span>{price}</span>
                {activeFilters.includes(price) && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wide">
            Rating
          </DropdownMenuLabel>
          {filterOptions.rating.map((rating) => (
            <DropdownMenuItem
              key={rating}
              className="cursor-pointer"
              onClick={() => toggleFilter(rating)}
            >
              <div className="flex items-center justify-between w-full">
                <span>{rating}</span>
                {activeFilters.includes(rating) && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wide">
            Availability
          </DropdownMenuLabel>
          {filterOptions.availability.map((availability) => (
            <DropdownMenuItem
              key={availability}
              className="cursor-pointer"
              onClick={() => toggleFilter(availability)}
            >
              <div className="flex items-center justify-between w-full">
                <span>{availability}</span>
                {activeFilters.includes(availability) && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchFilters;

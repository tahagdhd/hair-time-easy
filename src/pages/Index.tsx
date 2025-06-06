import { useState } from "react";
import { Search, MapPin, Star, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SalonCard from "@/components/SalonCard";
import SearchFilters from "@/components/SearchFilters";
import BookingModal from "@/components/BookingModal";
import ReviewCard from "@/components/ReviewCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const featuredSalons = [
    {
      id: 1,
      name: "Luxe Hair Studio",
      rating: 4.8,
      reviewCount: 124,
      distance: "0.3 miles",
      image: "/placeholder.svg",
      services: ["Haircut", "Coloring", "Styling"],
      priceRange: "$$",
      nextAvailable: "Today 2:30 PM",
      address: "123 Beauty Ave, Downtown"
    },
    {
      id: 2,
      name: "Glamour & Grace",
      rating: 4.9,
      reviewCount: 89,
      distance: "0.5 miles",
      image: "/placeholder.svg",
      services: ["Highlights", "Extensions", "Treatments"],
      priceRange: "$$$",
      nextAvailable: "Tomorrow 10:00 AM",
      address: "456 Style St, Midtown"
    },
    {
      id: 3,
      name: "The Hair Lounge",
      rating: 4.7,
      reviewCount: 156,
      distance: "0.8 miles",
      image: "/placeholder.svg",
      services: ["Cuts", "Color", "Keratin"],
      priceRange: "$$",
      nextAvailable: "Today 4:00 PM",
      address: "789 Chic Blvd, Uptown"
    }
  ];

  const recentReviews = [
    {
      id: 1,
      customerName: "Sarah M.",
      salonName: "Luxe Hair Studio",
      rating: 5,
      comment: "Amazing experience! The stylist really understood what I wanted and delivered perfectly.",
      date: "2 days ago",
      service: "Haircut & Color"
    },
    {
      id: 2,
      customerName: "Emily R.",
      salonName: "Glamour & Grace",
      rating: 5,
      comment: "Best highlights I've ever had! Professional service and beautiful results.",
      date: "1 week ago",
      service: "Highlights"
    }
  ];

  const handleBookNow = (salon) => {
    setSelectedSalon(salon);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-salon-warm">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 salon-gradient opacity-90"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/4e0d8107-3bf4-4830-b6e3-01e730524ed1.png" 
                alt="Txassen Logo" 
                className="h-24 mx-auto mb-4"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-salon-gold">Hair Salon</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Book appointments with top-rated hairdressers near you in just a few clicks
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex flex-col md:flex-row gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Search by service, salon name, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Current location"
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl min-w-48"
                  />
                </div>
                <Button className="h-12 px-8 bg-white text-primary hover:bg-white/90 rounded-xl font-semibold">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Partner Salons</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10k+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Online Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Salons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Salons Near You</h2>
              <p className="text-lg text-muted-foreground">Top-rated hair salons with available appointments</p>
            </div>
            <SearchFilters />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSalons.map((salon) => (
              <SalonCard
                key={salon.id}
                salon={salon}
                onBookNow={() => handleBookNow(salon)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Booking your perfect hair appointment has never been easier
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto salon-gradient rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Search & Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Find salons near you using our smart search. Filter by services, price range, and availability.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto salon-gradient rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Choose Time Slot</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  View real-time availability and select the perfect time that fits your schedule.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto salon-gradient rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Enjoy & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get your hair done by professionals and share your experience with the community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 salon-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who found their perfect salon
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
            Book Your Appointment Now
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        salon={selectedSalon}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default Index;

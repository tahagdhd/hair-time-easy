
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
      name: "Studio Capillaire Luxe",
      rating: 4.8,
      reviewCount: 124,
      distance: "0,3 km",
      image: "/placeholder.svg",
      services: ["Coupe", "Coloration", "Coiffage"],
      priceRange: "$$",
      nextAvailable: "Aujourd'hui 14h30",
      address: "123 Avenue de la Beauté, Centre-ville"
    },
    {
      id: 2,
      name: "Glamour & Grâce",
      rating: 4.9,
      reviewCount: 89,
      distance: "0,5 km",
      image: "/placeholder.svg",
      services: ["Mèches", "Extensions", "Soins"],
      priceRange: "$$$",
      nextAvailable: "Demain 10h00",
      address: "456 Rue du Style, Quartier Moderne"
    },
    {
      id: 3,
      name: "Le Salon Coiffure",
      rating: 4.7,
      reviewCount: 156,
      distance: "0,8 km",
      image: "/placeholder.svg",
      services: ["Coupes", "Couleur", "Kératine"],
      priceRange: "$$",
      nextAvailable: "Aujourd'hui 16h00",
      address: "789 Boulevard Chic, Quartier Nord"
    }
  ];

  const recentReviews = [
    {
      id: 1,
      customerName: "Sarah M.",
      salonName: "Studio Capillaire Luxe",
      rating: 5,
      comment: "Expérience incroyable ! La coiffeuse a vraiment compris ce que je voulais et a livré parfaitement.",
      date: "Il y a 2 jours",
      service: "Coupe & Couleur"
    },
    {
      id: 2,
      customerName: "Emily R.",
      salonName: "Glamour & Grâce",
      rating: 5,
      comment: "Les meilleures mèches que j'aie jamais eues ! Service professionnel et résultats magnifiques.",
      date: "Il y a 1 semaine",
      service: "Mèches"
    }
  ];

  const handleBookNow = (salon) => {
    setSelectedSalon(salon);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-salon-warm">
      {/* Section Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 salon-gradient opacity-90"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/4e0d8107-3bf4-4830-b6e3-01e730524ed1.png" 
                alt="Logo Txassen" 
                className="h-24 mx-auto mb-4"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Trouvez Votre
              <span className="block text-salon-gold">Salon de Coiffure Parfait</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Réservez des rendez-vous avec les meilleurs coiffeurs près de chez vous en quelques clics
            </p>
            
            {/* Barre de Recherche */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex flex-col md:flex-row gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Rechercher par service, nom de salon, ou localisation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Localisation actuelle"
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl min-w-48"
                  />
                </div>
                <Button className="h-12 px-8 bg-white text-primary hover:bg-white/90 rounded-xl font-semibold">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Rapides */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Salons Partenaires</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10k+</div>
              <div className="text-muted-foreground">Clients Satisfaits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">4,8★</div>
              <div className="text-muted-foreground">Note Moyenne</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Réservation en Ligne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Salons en Vedette */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Salons en Vedette Près de Vous</h2>
              <p className="text-lg text-muted-foreground">Salons de coiffure les mieux notés avec des créneaux disponibles</p>
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

      {/* Comment Ça Marche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment Ça Marche</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Réserver votre rendez-vous coiffure parfait n'a jamais été aussi facile
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto salon-gradient rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Rechercher & Découvrir</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Trouvez des salons près de chez vous grâce à notre recherche intelligente. Filtrez par services, gamme de prix et disponibilité.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto salon-gradient rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Choisir un Créneau</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Consultez les disponibilités en temps réel et sélectionnez l'horaire parfait qui correspond à votre emploi du temps.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto salon-gradient rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Profiter & Évaluer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Faites-vous coiffer par des professionnels et partagez votre expérience avec la communauté.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avis Récents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce Que Disent Nos Clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Voir Tous les Avis
            </Button>
          </div>
        </div>
      </section>

      {/* Section Appel à l'Action */}
      <section className="py-16 salon-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Transformer Votre Look ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers de clients satisfaits qui ont trouvé leur salon parfait
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
            Réservez Votre Rendez-vous Maintenant
          </Button>
        </div>
      </section>

      {/* Modal de Réservation */}
      <BookingModal
        salon={selectedSalon}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default Index;


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
      name: "Salon Majestic Rabat",
      rating: 4.8,
      reviewCount: 124,
      distance: "0,3 km",
      image: "/placeholder.svg",
      services: ["Coupe", "Henné", "Argan"],
      priceRange: "150-300 MAD",
      nextAvailable: "Aujourd'hui 14h30",
      address: "Avenue Mohammed V, Agdal, Rabat"
    },
    {
      id: 2,
      name: "Beauté Royale Casa",
      rating: 4.9,
      reviewCount: 89,
      distance: "0,5 km",
      image: "/placeholder.svg",
      services: ["Mariée", "Coloration", "Soins"],
      priceRange: "200-500 MAD",
      nextAvailable: "Demain 10h00",
      address: "Boulevard Zerktouni, Casablanca"
    },
    {
      id: 3,
      name: "Coiffure Atlas",
      rating: 4.7,
      reviewCount: 156,
      distance: "0,8 km",
      image: "/placeholder.svg",
      services: ["Homme", "Traditionnel", "Moderne"],
      priceRange: "80-200 MAD",
      nextAvailable: "Aujourd'hui 16h00",
      address: "Médina, Marrakech"
    }
  ];

  const recentReviews = [
    {
      id: 1,
      customerName: "Fatima A.",
      salonName: "Salon Majestic Rabat",
      rating: 5,
      comment: "Service exceptionnel ! Spécialiste du henné et des soins à l'huile d'argan. Je recommande vivement.",
      date: "Il y a 2 jours",
      service: "Henné & Soins Argan"
    },
    {
      id: 2,
      customerName: "Aicha M.",
      salonName: "Beauté Royale Casa",
      rating: 5,
      comment: "Parfait pour les coiffures de mariée marocaines. Professionnalisme et respect des traditions.",
      date: "Il y a 1 semaine",
      service: "Coiffure Mariée"
    }
  ];

  const handleBookNow = (salon) => {
    setSelectedSalon(salon);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-moroccan-cream to-moroccan-warm">
      {/* Section Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 moroccan-gradient opacity-90"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-moroccan-gold">Thassen</span>
              Plateforme de Réservation
              <span className="block">Salons de Coiffure au Maroc</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Réservez facilement vos rendez-vous chez les meilleurs coiffeurs du Maroc
            </p>
            
            {/* Barre de Recherche */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex flex-col md:flex-row gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Rechercher par service, salon, ou ville..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Rabat, Casablanca, Marrakech..."
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
              <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-muted-foreground">Salons Partenaires</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">5k+</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Salons Recommandés au Maroc</h2>
              <p className="text-lg text-muted-foreground">Découvrez les meilleurs salons de coiffure dans votre ville</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment Utiliser Thassen</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Réservez votre rendez-vous coiffure au Maroc en quelques clics
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto moroccan-gradient rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Rechercher</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Trouvez des salons près de chez vous au Maroc. Filtrez par services traditionnels marocains, prix en MAD et disponibilité.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto moroccan-gradient rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Réserver</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Choisissez votre créneau horaire et réservez instantanément. Recevez une confirmation par SMS ou WhatsApp.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto moroccan-gradient rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Profiter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bénéficiez des services de coiffeurs experts marocains et partagez votre expérience avec la communauté.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Spécialisés Marocains */}
      <section className="py-16 moroccan-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Services Traditionnels Marocains</h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez nos spécialités : henné, soins à l'argan, coiffures de mariée marocaines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Henné Traditionnel</h3>
              <p className="opacity-90">Application professionnelle de henné naturel marocain</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Soins à l'Argan</h3>
              <p className="opacity-90">Masques et traitements à l'huile d'argan authentique</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Coiffures Mariée</h3>
              <p className="opacity-90">Styles traditionnels et modernes pour votre grand jour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Récents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Avis de Nos Clientes Marocaines</h2>
          
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
      <section className="py-16 dark-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Transformer Votre Style ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers de Marocains qui font confiance à Thassen pour leurs rendez-vous beauté
          </p>
          <Button size="lg" className="bg-moroccan-gold text-moroccan-dark hover:bg-moroccan-gold/90 font-semibold px-8 py-3">
            Réservez Maintenant - À partir de 80 MAD
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

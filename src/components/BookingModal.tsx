
import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  salon: any;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ salon, isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const { toast } = useToast();

  const availableTimes = [
    "9h00", "9h30", "10h00", "10h30", "11h00", "11h30",
    "13h00", "13h30", "14h00", "14h30", "15h00", "15h30",
    "16h00", "16h30", "17h00", "17h30"
  ];

  const services = [
    { name: "Coupe Classique", duration: "60 min", price: "80 MAD" },
    { name: "Henné Traditionnel", duration: "120 min", price: "150 MAD" },
    { name: "Soins à l'Argan", duration: "90 min", price: "200 MAD" },
    { name: "Coiffure Mariée", duration: "180 min", price: "500 MAD" },
    { name: "Coloration", duration: "120 min", price: "250 MAD" },
    { name: "Coupe Homme", duration: "45 min", price: "60 MAD" }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService || !customerName || !customerPhone) {
      toast({
        title: "Informations Manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Réservation Confirmée !",
      description: `Votre rendez-vous chez ${salon?.name} a été réservé pour le ${selectedDate} à ${selectedTime}. Confirmation envoyée par SMS.`,
    });

    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setSelectedService("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    
    onClose();
  };

  if (!salon) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Réserver un Rendez-vous</DialogTitle>
          <DialogDescription>
            Planifiez votre rendez-vous chez {salon.name}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6">
          {/* Informations du Salon */}
          <Card className="border-moroccan-warm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{salon.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{salon.address}</p>
              <div className="flex items-center mt-2 space-x-4">
                <Badge variant="outline">★ {salon.rating}</Badge>
                <Badge variant="outline">{salon.priceRange}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sélection du Service */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Sélectionner un Service</Label>
            <div className="grid gap-3">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className={`cursor-pointer transition-all border-moroccan-warm ${
                    selectedService === service.name
                      ? "ring-2 ring-primary bg-primary/5"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedService(service.name)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <Badge variant="outline" className="border-moroccan-brown">{service.price}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sélection Date & Heure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="border-moroccan-warm"
              />
            </div>
            <div className="space-y-2">
              <Label>Heure</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="border-moroccan-warm">
                  <SelectValue placeholder="Sélectionner une heure" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Informations Client */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Vos Informations</Label>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom Complet *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Entrez votre nom complet"
                  className="border-moroccan-warm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="border-moroccan-warm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optionnel)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="votre.email@exemple.com"
                    className="border-moroccan-warm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Résumé de la Réservation */}
          {selectedService && selectedDate && selectedTime && (
            <Card className="bg-moroccan-cream border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Résumé de la Réservation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Service :</span>
                  <span className="font-medium">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date :</span>
                  <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Heure :</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Salon :</span>
                  <span className="font-medium">{salon.name}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Prix :</span>
                  <span className="text-primary">
                    {services.find(s => s.name === selectedService)?.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Boutons d'Action */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1 border-moroccan-brown">
              Annuler
            </Button>
            <Button 
              onClick={handleBooking} 
              className="flex-1 moroccan-gradient text-white hover:opacity-90"
            >
              Confirmer la Réservation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

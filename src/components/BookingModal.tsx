
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
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const services = [
    { name: "Haircut", duration: "60 min", price: "$45" },
    { name: "Hair Color", duration: "120 min", price: "$85" },
    { name: "Highlights", duration: "180 min", price: "$120" },
    { name: "Blowout", duration: "45 min", price: "$35" },
    { name: "Treatment", duration: "90 min", price: "$65" }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService || !customerName || !customerEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your appointment at ${salon?.name} has been booked for ${selectedDate} at ${selectedTime}.`,
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
          <DialogTitle className="text-2xl">Book Appointment</DialogTitle>
          <DialogDescription>
            Schedule your appointment at {salon.name}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6">
          {/* Salon Info */}
          <Card>
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

          {/* Service Selection */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Select Service</Label>
            <div className="grid gap-3">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className={`cursor-pointer transition-all ${
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
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="space-y-2">
              <Label>Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Your Information</Label>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          {selectedService && selectedDate && selectedTime && (
            <Card className="bg-salon-cream border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-medium">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Salon:</span>
                  <span className="font-medium">{salon.name}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleBooking} 
              className="flex-1 salon-gradient text-white hover:opacity-90"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

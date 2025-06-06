
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReviewCardProps {
  review: {
    id: number;
    customerName: string;
    salonName: string;
    rating: number;
    comment: string;
    date: string;
    service: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-lg">{review.customerName}</h4>
            <p className="text-sm text-muted-foreground">{review.salonName}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              {renderStars(review.rating)}
            </div>
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-3 leading-relaxed">"{review.comment}"</p>
        <Badge variant="outline" className="text-xs">
          {review.service}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface EquipmentCardProps {
  name: string;
  type: string;
  brand: string;
  price: string;
  popular: boolean;
}

const EquipmentCard = ({ name, type, brand, price, popular }: EquipmentCardProps) => {
  const getBrandEmoji = (brand: string) => {
    const emojiMap: Record<string, string> = {
      "Mahindra": "🚜",
      "New Holland": "🌾",
      "John Deere": "🦌",
      "Swaraj": "⚡",
      "Escort": "💪",
      "Sonalika": "🔥"
    };
    return emojiMap[brand] || "🚜";
  };

  return (
    <div className="p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-xl">{getBrandEmoji(brand)}</span>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-medium text-sm">{name}</h4>
              {popular && (
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
              )}
            </div>
            <p className="text-xs text-gray-600">{type} • {brand}</p>
            <p className="text-xs font-medium text-green-600">{price}</p>
          </div>
        </div>
        {popular && (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs">
            Popular
          </Badge>
        )}
      </div>
    </div>
  );
};

export default EquipmentCard;


import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: "functional" | "needs-maintenance" | "out-of-service";
  lastMaintenance: string;
  nextMaintenance: string;
  image: string;
}

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
  onMaintenance?: (id: string) => void;
}

export function EquipmentCard({ equipment, className, onMaintenance }: EquipmentCardProps) {
  const getStatusBadge = (status: Equipment["status"]) => {
    switch (status) {
      case "functional":
        return <Badge className="bg-green-500 hover:bg-green-600">Functional</Badge>;
      case "needs-maintenance":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Needs Maintenance</Badge>;
      case "out-of-service":
        return <Badge className="bg-red-500 hover:bg-red-600">Out of Service</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="p-0">
        <img 
          src={equipment.image} 
          alt={equipment.name} 
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg">{equipment.name}</h3>
          {getStatusBadge(equipment.status)}
        </div>
        <p className="text-sm text-gray-600 mb-2">Type: {equipment.type}</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-gray-500">Last Maintenance:</p>
            <p>{equipment.lastMaintenance}</p>
          </div>
          <div>
            <p className="text-gray-500">Next Maintenance:</p>
            <p>{equipment.nextMaintenance}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => onMaintenance && onMaintenance(equipment.id)}
        >
          Schedule Maintenance
        </Button>
      </CardFooter>
    </Card>
  );
}

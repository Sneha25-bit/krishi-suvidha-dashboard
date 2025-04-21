
import { EquipmentCard } from "@/components/equipment/EquipmentCard";
import { type Equipment as EquipmentType } from "@/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Sample equipment data
const equipmentData: EquipmentType[] = [
  {
    id: "tractor-1",
    name: "Mahindra 575 DI Tractor",
    type: "Tractor",
    status: "functional",
    lastMaintenance: "15 Mar 2025",
    nextMaintenance: "15 Jun 2025",
    image: "https://www.mahindratractor.com/assets/images/products/575di/03.png",
  },
  {
    id: "harvester-1",
    name: "New Holland TC5.30 Harvester",
    type: "Harvester",
    status: "needs-maintenance",
    lastMaintenance: "10 Jan 2025",
    nextMaintenance: "10 Apr 2025",
    image: "https://static.nhance.agriconnect.in/1663223125898-NH TC5 90.jpg?w=1280",
  },
  {
    id: "pump-1",
    name: "Kirloskar 5HP Water Pump",
    type: "Irrigation",
    status: "functional",
    lastMaintenance: "5 Feb 2025",
    nextMaintenance: "5 May 2025",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/299532337/XG/LP/JR/183465354/kirloskar-kds-20-20hp-diesel-pump-set.jpg",
  },
  {
    id: "sprayer-1",
    name: "Aspee Bolo Power Sprayer",
    type: "Sprayer",
    status: "out-of-service",
    lastMaintenance: "20 Dec 2024",
    nextMaintenance: "20 Mar 2025",
    image: "https://m.media-amazon.com/images/I/612ZoAU8BfL._SL1000_.jpg",
  },
];

// Sample maintenance history
const maintenanceHistory = [
  {
    equipmentName: "Mahindra 575 DI Tractor",
    date: "15 Mar 2025",
    type: "Regular Service",
    cost: "₹2,500",
    notes: "Oil change, filter replacement, and general inspection",
  },
  {
    equipmentName: "New Holland TC5.30 Harvester",
    date: "10 Jan 2025",
    type: "Repair",
    cost: "₹8,200",
    notes: "Fixed cutting mechanism and replaced worn-out parts",
  },
  {
    equipmentName: "Kirloskar 5HP Water Pump",
    date: "5 Feb 2025",
    type: "Regular Service",
    cost: "₹1,200",
    notes: "Cleaned pump and replaced seals",
  },
  {
    equipmentName: "Aspee Bolo Power Sprayer",
    date: "20 Dec 2024",
    type: "Repair Attempt",
    cost: "₹800",
    notes: "Motor replacement needed, parts on order",
  },
];

export default function Equipment() {
  const handleMaintenanceRequest = (id: string) => {
    const equipment = equipmentData.find(item => item.id === id);
    if (equipment) {
      toast.success(`Maintenance scheduled for ${equipment.name}`, {
        description: "A technician will contact you shortly to confirm the details.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Farm Equipment</h1>
        <p className="text-muted-foreground">Manage your farm machinery and equipment.</p>
      </div>

      <Tabs defaultValue="inventory">
        <TabsList>
          <TabsTrigger value="inventory">Equipment Inventory</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance History</TabsTrigger>
          <TabsTrigger value="rentals">Rental Services</TabsTrigger>
        </TabsList>
        <TabsContent value="inventory" className="space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium">Your Equipment</h2>
              <p className="text-sm text-muted-foreground">Total: {equipmentData.length} items</p>
            </div>
            <Button>Add New Equipment</Button>
          </div>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentData.map((equipment) => (
              <EquipmentCard 
                key={equipment.id} 
                equipment={equipment} 
                onMaintenance={handleMaintenanceRequest}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="maintenance" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {maintenanceHistory.map((record, index) => (
                  <div key={index} className="border rounded-md p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{record.equipmentName}</h3>
                      <Badge variant="outline">{record.type}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Date: </span>
                        <span>{record.date}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Cost: </span>
                        <span>{record.cost}</span>
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      <span className="text-muted-foreground">Notes: </span>
                      <span>{record.notes}</span>
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipmentData
                  .filter(equipment => equipment.status !== "out-of-service")
                  .map((equipment, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <h3 className="font-medium">{equipment.name}</h3>
                        <p className="text-sm text-muted-foreground">Next maintenance: {equipment.nextMaintenance}</p>
                      </div>
                      <div>
                        {equipment.status === "needs-maintenance" ? (
                          <Badge className="bg-amber-500 hover:bg-amber-600">Due Soon</Badge>
                        ) : (
                          <Badge variant="outline">Scheduled</Badge>
                        )}
                      </div>
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rentals" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Rental Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p>Need additional equipment for seasonal work? Check these local rental services:</p>
                
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium">Singh Agricultural Machinery</h3>
                    <p className="text-sm text-muted-foreground mt-1">Located 5 km from your farm</p>
                    <div className="space-y-2 mt-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-farm-light rounded-full flex items-center justify-center mr-3">
                          <span className="text-farm-accent font-semibold text-sm">T</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Tractors</p>
                          <p className="text-xs text-muted-foreground">₹1,200 - ₹2,000 per day</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-farm-light rounded-full flex items-center justify-center mr-3">
                          <span className="text-farm-accent font-semibold text-sm">H</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Harvesters</p>
                          <p className="text-xs text-muted-foreground">₹5,000 - ₹7,000 per day</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Contact (9876543210)</Button>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium">Mehta Farm Equipment</h3>
                    <p className="text-sm text-muted-foreground mt-1">Located 12 km from your farm</p>
                    <div className="space-y-2 mt-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-farm-light rounded-full flex items-center justify-center mr-3">
                          <span className="text-farm-accent font-semibold text-sm">S</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Sprayers</p>
                          <p className="text-xs text-muted-foreground">₹400 - ₹800 per day</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-farm-light rounded-full flex items-center justify-center mr-3">
                          <span className="text-farm-accent font-semibold text-sm">P</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Pumps</p>
                          <p className="text-xs text-muted-foreground">₹300 - ₹1,000 per day</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Contact (8765432109)</Button>
                  </div>
                </div>
                
                <div className="bg-farm-light p-4 rounded-md mt-6">
                  <h3 className="font-medium mb-2">Government Subsidy Information</h3>
                  <p className="text-sm">The government offers subsidies for equipment rentals during peak farming seasons:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>50% subsidy on harvester rentals during harvest season</li>
                    <li>35% subsidy on tractor rentals for small farmers (less than 5 acres)</li>
                    <li>Apply at the local agricultural office with your farmer ID</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

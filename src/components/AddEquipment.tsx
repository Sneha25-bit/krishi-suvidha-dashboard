import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Phone, Mail, Globe } from "lucide-react";
import EquipmentCard from "./EquipmentCard";

const AddEquipment = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const equipmentBrands = [
    {
      name: "Mahindra",
      logo: "🚜",
      website: "https://www.mahindra.com/tractor",
      support: "1800-209-7979",
      email: "customercare@mahindra.com",
      types: ["Tractor", "Harvester", "Cultivator"]
    },
    {
      name: "New Holland",
      logo: "🌾",
      website: "https://www.newholland.com/in/en",
      support: "1800-419-0124",
      email: "info.india@newholland.com",
      types: ["Tractor", "Harvester", "Combine"]
    },
    {
      name: "John Deere",
      logo: "🦌",
      website: "https://www.deere.co.in",
      support: "1800-103-5555",
      email: "CustomerServiceIndia@johndeere.com",
      types: ["Tractor", "Harvester", "Sprayer"]
    },
    {
      name: "Swaraj",
      logo: "⚡",
      website: "https://www.swarajtractors.com",
      support: "1800-180-7979",
      email: "customercare@swarajtractors.com",
      types: ["Tractor", "Implement"]
    },
    {
      name: "Escort",
      logo: "💪",
      website: "https://www.escorttractors.com",
      support: "1800-208-4444",
      email: "customercare@escorttractors.com",
      types: ["Tractor", "Cultivator"]
    },
    {
      name: "Sonalika",
      logo: "🔥",
      website: "https://www.sonalika.com",
      support: "1800-180-7979",
      email: "customercare@sonalika.com",
      types: ["Tractor", "Power Tiller"]
    }
  ];

  const selectedBrandData = equipmentBrands.find(brand => brand.name === selectedBrand);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Add New Equipment</h2>
          <p className="text-gray-600 mt-1">Register new farm machinery to your inventory</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equipment Form */}
        <Card>
          <CardHeader>
            <CardTitle>Equipment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {equipmentBrands.map((brand) => (
                      <SelectItem key={brand.name} value={brand.name}>
                        <div className="flex items-center space-x-2">
                          <span>{brand.logo}</span>
                          <span>{brand.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Equipment Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType} disabled={!selectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedBrandData?.types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="model">Model Name</Label>
              <Input id="model" placeholder="e.g., 575 DI, TC5.30" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year of Purchase</Label>
                <Input id="year" type="number" placeholder="2025" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hours">Operating Hours</Label>
                <Input id="hours" type="number" placeholder="0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serial">Serial Number</Label>
              <Input id="serial" placeholder="Equipment serial number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any additional information about the equipment" rows={3} />
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Add Equipment to Inventory
            </Button>
          </CardContent>
        </Card>

        {/* Brand Support Information */}
        <div className="space-y-4">
          {selectedBrandData && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{selectedBrandData.logo}</span>
                  <span>{selectedBrandData.name} Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Globe className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Official Website</p>
                      <a 
                        href={selectedBrandData.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 text-sm flex items-center space-x-1"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Customer Support</p>
                      <a 
                        href={`tel:${selectedBrandData.support}`}
                        className="text-green-600 hover:text-green-700 text-sm"
                      >
                        {selectedBrandData.support}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Email Support</p>
                      <a 
                        href={`mailto:${selectedBrandData.email}`}
                        className="text-green-600 hover:text-green-700 text-sm"
                      >
                        {selectedBrandData.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Available Equipment Types</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedBrandData.types.map((type) => (
                      <Badge key={type} variant="secondary" className="bg-green-100 text-green-700">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Equipment Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <EquipmentCard 
                  name="Mahindra 575 DI"
                  type="Tractor"
                  brand="Mahindra"
                  price="₹7.5 - 8.5 Lakhs"
                  popular={true}
                />
                <EquipmentCard 
                  name="New Holland 3630 TX"
                  type="Tractor"
                  brand="New Holland"
                  price="₹8.2 - 9.2 Lakhs"
                  popular={false}
                />
                <EquipmentCard 
                  name="John Deere 5050D"
                  type="Tractor"
                  brand="John Deere"
                  price="₹9.5 - 10.5 Lakhs"
                  popular={true}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;

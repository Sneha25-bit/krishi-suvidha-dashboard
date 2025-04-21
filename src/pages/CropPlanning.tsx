
import { CropCalendar } from "@/components/crop-calendar/CropCalendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Sample crop data
const cropData = [
  {
    name: "Rice",
    variety: "Basmati",
    stage: "Growth",
    progress: 65,
    area: "3.5 acres",
    plantedDate: "15 Mar 2025",
    harvestDate: "20 Jul 2025",
    health: "good",
  },
  {
    name: "Wheat",
    variety: "HD-2967",
    stage: "Maturity",
    progress: 85,
    area: "5 acres",
    plantedDate: "10 Nov 2024",
    harvestDate: "15 Apr 2025",
    health: "excellent",
  },
  {
    name: "Cotton",
    variety: "Bt Cotton",
    stage: "Flowering",
    progress: 40,
    area: "2 acres",
    plantedDate: "5 Apr 2025",
    harvestDate: "25 Sep 2025",
    health: "good",
  },
  {
    name: "Maize",
    variety: "Pioneer 3377",
    stage: "Seedling",
    progress: 15,
    area: "1.5 acres",
    plantedDate: "1 Apr 2025",
    harvestDate: "15 Aug 2025",
    health: "fair",
  },
];

// Sample recommended crops
const recommendedCrops = [
  {
    name: "Soybean",
    suitability: "high",
    waterReq: "medium",
    duration: "90-120 days",
    season: "Kharif",
    expectedProfit: "₹25,000/acre",
  },
  {
    name: "Mustard",
    suitability: "high",
    waterReq: "low",
    duration: "110-140 days",
    season: "Rabi",
    expectedProfit: "₹20,000/acre",
  },
  {
    name: "Chickpea",
    suitability: "medium",
    waterReq: "low",
    duration: "120-150 days",
    season: "Rabi",
    expectedProfit: "₹18,000/acre",
  },
];

export default function CropPlanning() {
  const getHealthBadge = (health: string) => {
    switch (health) {
      case "excellent":
        return <Badge className="bg-green-500 hover:bg-green-600">Excellent</Badge>;
      case "good":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Good</Badge>;
      case "fair":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Fair</Badge>;
      case "poor":
        return <Badge className="bg-red-500 hover:bg-red-600">Poor</Badge>;
      default:
        return null;
    }
  };

  const getSuitabilityBadge = (suitability: string) => {
    switch (suitability) {
      case "high":
        return <Badge className="bg-green-500 hover:bg-green-600">High</Badge>;
      case "medium":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Medium</Badge>;
      case "low":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Crop Planning</h1>
        <p className="text-muted-foreground">Plan, track, and optimize your crop cycles.</p>
      </div>

      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">Current Crops</TabsTrigger>
          <TabsTrigger value="calendar">Crop Calendar</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4 mt-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {cropData.map((crop, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{crop.name}</CardTitle>
                    {getHealthBadge(crop.health)}
                  </div>
                  <p className="text-sm text-muted-foreground">Variety: {crop.variety}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{crop.stage}</span>
                        <span>{crop.progress}%</span>
                      </div>
                      <Progress value={crop.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Area</p>
                        <p>{crop.area}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Planted</p>
                        <p>{crop.plantedDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expected Harvest</p>
                        <p>{crop.harvestDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Days to Harvest</p>
                        <p>
                          {Math.floor(
                            (new Date(crop.harvestDate).getTime() - 
                            new Date().getTime()) / (1000 * 60 * 60 * 24)
                          )} days
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="calendar" className="mt-4">
          <CropCalendar className="col-span-2" />
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Crop Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p>Based on your soil conditions, local climate, and market trends, the following crops are recommended for your upcoming planting cycle:</p>
                
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  {recommendedCrops.map((crop, index) => (
                    <Card key={index} className="border-2 border-farm-primary/10 hover:border-farm-primary transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{crop.name}</CardTitle>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-sm">Suitability:</span>
                            {getSuitabilityBadge(crop.suitability)}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Water Requirement:</span>
                            <span>{crop.waterReq}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Growing Season:</span>
                            <span>{crop.season}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span>{crop.duration}</span>
                          </div>
                          <div className="flex justify-between font-medium pt-2">
                            <span>Expected Profit:</span>
                            <span className="text-farm-primary">{crop.expectedProfit}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-farm-light p-4 rounded-md">
                  <h3 className="font-medium mb-2">Why these recommendations?</h3>
                  <p className="text-sm">These crops have been selected based on:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Your current soil nutrient profile</li>
                    <li>Weather forecasts for the upcoming season</li>
                    <li>Water availability in your region</li>
                    <li>Market demand and price trends</li>
                    <li>Crop rotation best practices</li>
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


import { SoilChart } from "@/components/charts/SoilChart";
import { MetricCard } from "@/components/ui/metric-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Leaf, TestTube, Waves } from "lucide-react";

export default function SoilMonitoring() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Soil Monitoring</h1>
        <p className="text-muted-foreground">Track soil health and fertility for optimal crop growth.</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Moisture"
          value="65%"
          icon={<Droplets className="h-4 w-4" />}
          description="Optimal: 60-70%"
          trend={{ value: 5, isPositive: true }}
        />
        <MetricCard
          title="pH Level"
          value="6.8"
          icon={<TestTube className="h-4 w-4" />}
          description="Slightly acidic"
          trend={{ value: 2, isPositive: true }}
        />
        <MetricCard
          title="Nitrogen"
          value="25 kg/ha"
          icon={<Leaf className="h-4 w-4" />}
          description="Moderate levels"
          trend={{ value: 10, isPositive: true }}
        />
        <MetricCard
          title="Organic Matter"
          value="3.2%"
          icon={<Waves className="h-4 w-4" />}
          description="Good fertility"
          trend={{ value: 0.2, isPositive: true }}
        />
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 mt-4">
          <SoilChart title="Soil Parameters (6 Months)" />
          
          <Card>
            <CardHeader>
              <CardTitle>Soil Health Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Your soil is currently in good health with adequate moisture content and balanced pH levels. Recent improvements in organic matter have contributed to better soil structure.</p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Strengths</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Good moisture retention capacity</li>
                      <li>Balanced pH suitable for most crops</li>
                      <li>Improving organic matter content</li>
                      <li>Adequate drainage in most areas</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Areas for Improvement</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Northeast section has lower phosphorus levels</li>
                      <li>Consider adding more organic compost</li>
                      <li>Monitor potassium levels during growing season</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nutrients" className="space-y-4 mt-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Macronutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Nitrogen (N)</span>
                      <span className="font-medium">25 kg/ha</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Status: Adequate (Recommended: 20-40 kg/ha)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Phosphorus (P)</span>
                      <span className="font-medium">15 kg/ha</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Status: Slightly low (Recommended: 20-30 kg/ha)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Potassium (K)</span>
                      <span className="font-medium">24 kg/ha</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Status: Good (Recommended: 15-25 kg/ha)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Micronutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Iron (Fe)</span>
                      <span className="font-medium">4.8 ppm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Status: Good (Recommended: 4.0-6.0 ppm)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Zinc (Zn)</span>
                      <span className="font-medium">0.8 ppm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Status: Low (Recommended: 1.0-3.0 ppm)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Manganese (Mn)</span>
                      <span className="font-medium">2.5 ppm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Status: Good (Recommended: 1.0-5.0 ppm)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Soil Management Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-medium text-green-800">Apply organic compost</h3>
                  <p className="text-sm text-gray-600 mt-1">Add 2-3 tonnes/ha of organic compost to improve soil structure and increase organic matter content.</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h3 className="font-medium text-amber-800">Phosphorus supplement</h3>
                  <p className="text-sm text-gray-600 mt-1">Apply 10-15 kg/ha of phosphatic fertilizer to address the slight deficiency, especially in the northeastern sections.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-medium text-blue-800">Zinc micronutrient</h3>
                  <p className="text-sm text-gray-600 mt-1">Apply 2-3 kg/ha of zinc sulfate to correct the zinc deficiency before the next growing season.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-medium text-purple-800">Soil testing schedule</h3>
                  <p className="text-sm text-gray-600 mt-1">Conduct comprehensive soil tests every 6 months to monitor nutrient levels and adjust management practices accordingly.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

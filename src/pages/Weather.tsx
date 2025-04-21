
import { WeatherChart } from "@/components/charts/WeatherChart";
import { MetricCard } from "@/components/ui/metric-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeInfo } from "@/components/ui/badge";
import { CloudRain, Droplets, Wind, Sun, CloudLightning, ThermometerSun, Umbrella } from "lucide-react";

export default function Weather() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Weather Forecast</h1>
        <p className="text-muted-foreground">Monitor weather conditions and plan your farming activities.</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Temperature"
          value="32°C"
          icon={<ThermometerSun className="h-4 w-4" />}
          description="Feels like 34°C"
        />
        <MetricCard
          title="Humidity"
          value="65%"
          icon={<Droplets className="h-4 w-4" />}
          description="Moderate"
        />
        <MetricCard
          title="Wind"
          value="12 km/h"
          icon={<Wind className="h-4 w-4" />}
          description="Northwest"
        />
        <MetricCard
          title="Rainfall"
          value="0 mm"
          icon={<Umbrella className="h-4 w-4" />}
          description="No rain expected"
        />
      </div>

      <Tabs defaultValue="forecast">
        <TabsList>
          <TabsTrigger value="forecast">7-Day Forecast</TabsTrigger>
          <TabsTrigger value="rainfall">Rainfall Prediction</TabsTrigger>
          <TabsTrigger value="advisory">Weather Advisory</TabsTrigger>
        </TabsList>
        <TabsContent value="forecast" className="space-y-4 mt-4">
          <WeatherChart title="Weekly Weather Forecast" />
          
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[
              { day: "Today", temp: "32°C", icon: <Sun className="h-8 w-8 text-amber-500" />, condition: "Sunny" },
              { day: "Tomorrow", temp: "34°C", icon: <Sun className="h-8 w-8 text-amber-500" />, condition: "Sunny" },
              { day: "Wednesday", temp: "33°C", icon: <CloudRain className="h-8 w-8 text-blue-500" />, condition: "Light Rain" },
              { day: "Thursday", temp: "30°C", icon: <CloudLightning className="h-8 w-8 text-purple-500" />, condition: "Thunderstorm" },
            ].map((day, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-farm-light pb-2 pt-2">
                  <CardTitle className="text-center text-sm font-medium">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center py-6">
                  {day.icon}
                  <p className="mt-2 text-2xl font-bold">{day.temp}</p>
                  <p className="text-sm text-gray-500">{day.condition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="rainfall" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Rainfall Prediction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="font-medium mb-2 text-farm-text">Expected Rainfall Pattern</h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-20">Next week:</div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                        </div>
                        <div className="w-16 text-right">5-10 mm</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-20">Week 2:</div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                          </div>
                        </div>
                        <div className="w-16 text-right">20-30 mm</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-20">Week 3:</div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                          </div>
                        </div>
                        <div className="w-16 text-right">40-50 mm</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-20">Week 4:</div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                        </div>
                        <div className="w-16 text-right">15-25 mm</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium mb-2 text-farm-text">Seasonal Context</h3>
                    <div className="border rounded-md p-3 bg-blue-50 text-sm">
                      <p className="mb-2">The current month is expected to receive <strong>80-115 mm</strong> of rainfall, which is about <strong>10% above average</strong> for this time of year.</p>
                      <p>This is favorable for most crops currently in the field, but be prepared for potential waterlogging in low-lying areas during week 3.</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Historical Average", value: "75 mm", desc: "Based on 30-year data" },
                    { title: "Last Year", value: "62 mm", desc: "Below average" },
                    { title: "Prediction", value: "80-115 mm", desc: "Above average" },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md p-4 text-center">
                      <h4 className="text-sm text-gray-500 mb-1">{item.title}</h4>
                      <p className="text-xl font-bold text-farm-accent">{item.value}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advisory" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Weather Advisory for Farmers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50">
                  <h3 className="font-medium text-amber-800">Heat Wave Alert</h3>
                  <p className="text-sm text-gray-600 mt-1">Temperatures expected to remain above 32°C for the next 5 days. Ensure adequate irrigation for sensitive crops.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <h3 className="font-medium text-blue-800">Rainfall Advisory</h3>
                  <p className="text-sm text-gray-600 mt-1">Moderate to heavy rainfall expected in the region starting next week. Plan harvesting activities accordingly.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
                  <h3 className="font-medium text-green-800">Optimal Planting Conditions</h3>
                  <p className="text-sm text-gray-600 mt-1">Weather conditions will be favorable for planting rice and maize from next week onwards as soil moisture levels improve.</p>
                </div>
                
                <h3 className="font-medium mt-6 mb-3">Recommended Actions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BadgeInfo className="h-5 w-5 text-farm-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ensure proper irrigation for standing crops during the current dry spell.</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeInfo className="h-5 w-5 text-farm-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Clean drainage channels before the expected rainfall next week.</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeInfo className="h-5 w-5 text-farm-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Apply foliar sprays early in the morning or late evening to avoid heat stress.</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeInfo className="h-5 w-5 text-farm-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Delay fertilizer application until after the rainfall period.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

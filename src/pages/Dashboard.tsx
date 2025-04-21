
import { MetricCard } from "@/components/ui/metric-card";
import { SoilChart } from "@/components/charts/SoilChart";
import { WeatherChart } from "@/components/charts/WeatherChart";
import { MarketPriceChart } from "@/components/charts/MarketPriceChart";
import { Droplets, CloudRain, Tractor, Leaf, AlertTriangle, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your farm's key metrics at a glance.</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Soil Moisture"
          value="65%"
          icon={<Droplets className="h-4 w-4" />}
          description="Average moisture level"
          trend={{ value: 5, isPositive: true }}
          onClick={() => navigate("/soil")}
        />
        <MetricCard
          title="Weather"
          value="32°C"
          icon={<CloudRain className="h-4 w-4" />}
          description="Partly cloudy"
          onClick={() => navigate("/weather")}
        />
        <MetricCard
          title="Active Equipment"
          value="6"
          icon={<Tractor className="h-4 w-4" />}
          description="2 need maintenance"
          trend={{ value: 2, isPositive: false }}
          onClick={() => navigate("/equipment")}
        />
        <MetricCard
          title="Crops Health"
          value="Good"
          icon={<Leaf className="h-4 w-4" />}
          description="4 crops growing"
          onClick={() => navigate("/crops")}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <SoilChart />
        <WeatherChart />
      </div>
      
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <MarketPriceChart />
        
        <Card>
          <CardHeader>
            <CardTitle>Alerts & Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800">Low Soil Moisture Alert</h3>
                  <p className="text-sm text-amber-700">Eastern field moisture levels are below 30%. Consider irrigation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <Calendar className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-800">Upcoming Event: Fertilizer Application</h3>
                  <p className="text-sm text-blue-700">Scheduled for tomorrow in the northern wheat fields.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <Tractor className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-800">Equipment Maintenance Reminder</h3>
                  <p className="text-sm text-green-700">The tractor is due for maintenance in 2 days.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

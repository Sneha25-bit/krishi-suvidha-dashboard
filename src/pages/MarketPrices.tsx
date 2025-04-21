
import { MarketPriceChart } from "@/components/charts/MarketPriceChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, TrendingUp, Repeat } from "lucide-react";

// Sample market data
const marketData = [
  { 
    crop: "Rice", 
    variety: "Basmati", 
    currentPrice: 22, 
    prevPrice: 20, 
    change: 10,
    marketTrend: "up",
    forecast: "rising",
    bestMarket: "Uttar Pradesh Mandi"
  },
  { 
    crop: "Wheat", 
    variety: "HD-2967", 
    currentPrice: 25, 
    prevPrice: 27, 
    change: -7.41,
    marketTrend: "down",
    forecast: "stable",
    bestMarket: "Punjab Mandi"
  },
  { 
    crop: "Cotton", 
    variety: "Long Staple", 
    currentPrice: 65, 
    prevPrice: 60, 
    change: 8.33,
    marketTrend: "up",
    forecast: "rising",
    bestMarket: "Gujarat Market"
  },
  { 
    crop: "Sugarcane", 
    variety: "CO-0238", 
    currentPrice: 30, 
    prevPrice: 28, 
    change: 7.14,
    marketTrend: "up",
    forecast: "rising",
    bestMarket: "Maharashtra Market"
  },
  { 
    crop: "Maize", 
    variety: "Pioneer", 
    currentPrice: 18, 
    prevPrice: 19, 
    change: -5.26,
    marketTrend: "down",
    forecast: "stable",
    bestMarket: "Karnataka Market"
  },
];

// Sample market insights
const marketInsights = [
  {
    title: "Rice Market Uptrend",
    description: "Rice prices continue to rise due to lower production and increased export demand. Consider holding stocks for better prices in the coming weeks.",
    trend: "up",
  },
  {
    title: "Wheat Price Correction",
    description: "Wheat prices have seen a slight correction due to new harvest arrivals. Prices expected to stabilize by next month.",
    trend: "down",
  },
  {
    title: "Cotton Demand Increasing",
    description: "Global cotton demand is pushing prices upward. This trend is expected to continue for the next quarter.",
    trend: "up",
  },
];

export default function MarketPrices() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case "stable":
        return <Repeat className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };

  const getForecastBadge = (forecast: string) => {
    switch (forecast) {
      case "rising":
        return <Badge className="bg-green-500 hover:bg-green-600">Rising</Badge>;
      case "falling":
        return <Badge className="bg-red-500 hover:bg-red-600">Falling</Badge>;
      case "stable":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Stable</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Market Prices</h1>
        <p className="text-muted-foreground">Track market trends and make informed selling decisions.</p>
      </div>

      <Tabs defaultValue="prices">
        <TabsList>
          <TabsTrigger value="prices">Current Prices</TabsTrigger>
          <TabsTrigger value="trends">Price Trends</TabsTrigger>
          <TabsTrigger value="insights">Market Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="prices" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Market Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Crop</TableHead>
                    <TableHead>Variety</TableHead>
                    <TableHead className="text-right">Price (₹/kg)</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                    <TableHead className="text-right">Forecast</TableHead>
                    <TableHead>Best Market</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.crop}</TableCell>
                      <TableCell>{item.variety}</TableCell>
                      <TableCell className="text-right">₹{item.currentPrice}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end">
                          <span className={item.change >= 0 ? "text-green-600" : "text-red-600"}>
                            {item.change >= 0 ? "+" : ""}{item.change}%
                          </span>
                          <span className="ml-2">{getTrendIcon(item.marketTrend)}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {getForecastBadge(item.forecast)}
                      </TableCell>
                      <TableCell>{item.bestMarket}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="text-xs text-gray-500 mt-4">
                Price data updated as of April 21, 2025. Source: Agricultural Market Information System
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-4 mt-4">
          <MarketPriceChart className="mb-6" />
          
          <Card>
            <CardHeader>
              <CardTitle>Price Fluctuation Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2 flex items-center text-green-700">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Rising Crops
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Rice</span>
                        <span className="text-green-600">+10.00%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Cotton</span>
                        <span className="text-green-600">+8.33%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sugarcane</span>
                        <span className="text-green-600">+7.14%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2 flex items-center text-red-700">
                      <TrendingDown className="h-4 w-4 mr-2" />
                      Falling Crops
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Wheat</span>
                        <span className="text-red-600">-7.41%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Maize</span>
                        <span className="text-red-600">-5.26%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2 flex items-center text-amber-700">
                      <Repeat className="h-4 w-4 mr-2" />
                      Stable Crops
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Potatoes</span>
                        <span className="text-amber-600">±2.00%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Onions</span>
                        <span className="text-amber-600">±1.50%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-farm-light p-4 rounded-md">
                  <h3 className="font-medium mb-2">Seasonality Impact</h3>
                  <p className="text-sm">The current price trends are influenced by seasonal factors:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Rice prices typically rise during this pre-monsoon period</li>
                    <li>Wheat prices decrease as fresh harvests reach the market</li>
                    <li>Cotton prices are rising due to increased global demand</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {marketInsights.map((insight, index) => (
                  <div key={index} className="border-l-4 border-farm-primary pl-4 py-2">
                    <div className="flex items-center">
                      <h3 className="font-medium text-farm-text">{insight.title}</h3>
                      <span className="ml-2">{getTrendIcon(insight.trend)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  </div>
                ))}
                
                <div className="rounded-md bg-farm-background border-2 border-farm-primary/20 p-4">
                  <h3 className="font-medium mb-2">Selling Recommendations</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <div className="font-medium">Crop</div>
                      <div className="font-medium">Current</div>
                      <div className="font-medium">Expected (1 mo.)</div>
                      <div className="font-medium">Action</div>
                      
                      <div>Rice</div>
                      <div>₹22/kg</div>
                      <div>₹24-26/kg</div>
                      <div>
                        <Badge className="bg-amber-500 hover:bg-amber-600">Hold</Badge>
                      </div>
                      
                      <div>Wheat</div>
                      <div>₹25/kg</div>
                      <div>₹24-25/kg</div>
                      <div>
                        <Badge className="bg-green-500 hover:bg-green-600">Sell</Badge>
                      </div>
                      
                      <div>Cotton</div>
                      <div>₹65/kg</div>
                      <div>₹68-72/kg</div>
                      <div>
                        <Badge className="bg-amber-500 hover:bg-amber-600">Hold</Badge>
                      </div>
                      
                      <div>Maize</div>
                      <div>₹18/kg</div>
                      <div>₹17-18/kg</div>
                      <div>
                        <Badge className="bg-green-500 hover:bg-green-600">Sell</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

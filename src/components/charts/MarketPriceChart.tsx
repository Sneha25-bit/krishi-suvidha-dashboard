
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultData = [
  { crop: "Rice", currentPrice: 22, lastMonthPrice: 20, avgPrice: 21 },
  { crop: "Wheat", currentPrice: 25, lastMonthPrice: 27, avgPrice: 26 },
  { crop: "Cotton", currentPrice: 65, lastMonthPrice: 60, avgPrice: 62 },
  { crop: "Sugarcane", currentPrice: 30, lastMonthPrice: 28, avgPrice: 29 },
  { crop: "Maize", currentPrice: 18, lastMonthPrice: 19, avgPrice: 18.5 },
];

interface MarketPriceChartProps {
  data?: typeof defaultData;
  title?: string;
  className?: string;
}

export function MarketPriceChart({ data = defaultData, title = "Market Price Comparison (₹/kg)", className }: MarketPriceChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="crop" stroke="#4B5563" />
            <YAxis stroke="#4B5563" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "white", 
                borderColor: "#E2E8F0", 
                borderRadius: "0.375rem" 
              }} 
              formatter={(value) => [`₹${value}`, '']}
            />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar 
              dataKey="currentPrice" 
              name="Current Price" 
              fill="#4D7C0F" 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="lastMonthPrice" 
              name="Last Month" 
              fill="#92400E" 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="avgPrice" 
              name="Avg Price (6 months)" 
              fill="#0369A1" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultData = [
  { date: "Jan", moisture: 40, ph: 6.8, nitrogen: 20 },
  { date: "Feb", moisture: 50, ph: 6.5, nitrogen: 22 },
  { date: "Mar", moisture: 45, ph: 6.7, nitrogen: 21 },
  { date: "Apr", moisture: 70, ph: 6.9, nitrogen: 25 },
  { date: "May", moisture: 65, ph: 7.0, nitrogen: 28 },
  { date: "Jun", moisture: 60, ph: 6.8, nitrogen: 26 },
  { date: "Jul", moisture: 90, ph: 6.7, nitrogen: 30 },
];

interface SoilChartProps {
  data?: typeof defaultData;
  title?: string;
  className?: string;
}

export function SoilChart({ data = defaultData, title = "Soil Health Trends", className }: SoilChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="date" stroke="#4B5563" />
            <YAxis stroke="#4B5563" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "white", 
                borderColor: "#E2E8F0", 
                borderRadius: "0.375rem" 
              }} 
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="moisture"
              stroke="#0369A1"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Moisture (%)"
            />
            <Line 
              type="monotone" 
              dataKey="ph" 
              stroke="#4D7C0F" 
              strokeWidth={2} 
              name="pH Level"
            />
            <Line 
              type="monotone" 
              dataKey="nitrogen" 
              stroke="#92400E" 
              strokeWidth={2} 
              name="Nitrogen (kg/ha)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

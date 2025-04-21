
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultData = [
  { date: "Mon", temperature: 32, humidity: 65, rainfall: 0 },
  { date: "Tue", temperature: 34, humidity: 60, rainfall: 0 },
  { date: "Wed", temperature: 33, humidity: 70, rainfall: 5 },
  { date: "Thu", temperature: 30, humidity: 80, rainfall: 10 },
  { date: "Fri", temperature: 29, humidity: 75, rainfall: 8 },
  { date: "Sat", temperature: 31, humidity: 65, rainfall: 2 },
  { date: "Sun", temperature: 33, humidity: 60, rainfall: 0 },
];

interface WeatherChartProps {
  data?: typeof defaultData;
  title?: string;
  className?: string;
}

export function WeatherChart({ data = defaultData, title = "Weekly Weather Forecast", className }: WeatherChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
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
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#DC2626"
              fill="#FEE2E2"
              fillOpacity={0.3}
              activeDot={{ r: 8 }}
              name="Temperature (°C)"
            />
            <Area 
              type="monotone" 
              dataKey="humidity" 
              stroke="#2563EB" 
              fill="#DBEAFE"
              fillOpacity={0.3}
              name="Humidity (%)"
            />
            <Area 
              type="monotone" 
              dataKey="rainfall" 
              stroke="#0369A1" 
              fill="#E0F2FE"
              fillOpacity={0.5}
              name="Rainfall (mm)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

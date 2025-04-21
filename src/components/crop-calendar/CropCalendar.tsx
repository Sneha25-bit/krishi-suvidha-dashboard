
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Wheat, Leaf, Sprout, SproutIcon } from "lucide-react";

// Custom component for rendering days with specific crops
const CropDayContent = ({ date }: { date: Date }) => {
  // Sample crop data - in a real app, this would come from an API or database
  const cropEvents = [
    { date: new Date(2025, 3, 15), crop: "Wheat", icon: <Wheat className="h-4 w-4" />, color: "bg-amber-500" },
    { date: new Date(2025, 3, 22), crop: "Maize", icon: <SproutIcon className="h-4 w-4" />, color: "bg-yellow-500" },
    { date: new Date(2025, 4, 5), crop: "Vegetables", icon: <Leaf className="h-4 w-4" />, color: "bg-orange-500" },
    { date: new Date(2025, 4, 12), crop: "Rice", icon: <Sprout className="h-4 w-4" />, color: "bg-green-500" },
  ];
  
  // Find if this day has a crop event
  const cropEvent = cropEvents.find(event => 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );
  
  if (cropEvent) {
    return (
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 right-0">
          <div className={`${cropEvent.color} rounded-full p-1 text-white`}>
            {cropEvent.icon}
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export const CropCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  
  const [selectedCrops, setSelectedCrops] = useState([
    { name: "Wheat", season: "Rabi", sowingMonth: "October-November", harvestMonth: "March-April", color: "bg-amber-500", icon: <Wheat className="h-4 w-4" /> },
    { name: "Maize", season: "Kharif", sowingMonth: "June-July", harvestMonth: "September-October", color: "bg-yellow-500", icon: <SproutIcon className="h-4 w-4" /> },
    { name: "Vegetables", season: "Winter", sowingMonth: "September-October", harvestMonth: "December-January", color: "bg-orange-500", icon: <Leaf className="h-4 w-4" /> },
    { name: "Rice", season: "Kharif", sowingMonth: "June-July", harvestMonth: "November-December", color: "bg-green-500", icon: <Sprout className="h-4 w-4" /> },
  ]);
  
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Crop Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">{format(date, 'MMMM yyyy')}</h3>
              <p className="text-sm text-muted-foreground">
                Plan your sowing and harvesting schedule
              </p>
            </div>
            
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => date && setDate(date)}
              className="rounded-md border"
              components={{
                DayContent: (props) => (
                  <>
                    {props.date.getDate()}
                    <CropDayContent date={props.date} />
                  </>
                )
              }}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Crop Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-2">Upcoming Activities</h3>
                <div className="space-y-3">
                  {[
                    { date: "April 15, 2025", activity: "Wheat Harvesting", crop: "Wheat" },
                    { date: "April 22, 2025", activity: "Maize Sowing Preparation", crop: "Maize" },
                    { date: "May 5, 2025", activity: "Vegetable Seed Germination Check", crop: "Vegetables" },
                    { date: "May 12, 2025", activity: "Rice Field Preparation", crop: "Rice" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start p-2 border rounded-md">
                      <div className="flex-1">
                        <p className="font-medium">{activity.activity}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      <Badge variant="outline">{activity.crop}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Current Crops</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCrops.map((crop, i) => (
                    <div key={i} className="border rounded-md p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`${crop.color} p-1 rounded-full text-white`}>
                          {crop.icon}
                        </div>
                        <span className="font-medium">{crop.name}</span>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>Season: {crop.season}</p>
                        <p>Sowing: {crop.sowingMonth}</p>
                        <p>Harvest: {crop.harvestMonth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

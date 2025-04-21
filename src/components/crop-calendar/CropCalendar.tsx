
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface CropEvent {
  date: Date;
  type: "planting" | "harvesting" | "fertilizing" | "watering";
  crop: string;
  description: string;
}

interface CropCalendarProps {
  events?: CropEvent[];
  className?: string;
}

// Sample events data
const sampleEvents: CropEvent[] = [
  {
    date: new Date(2025, 3, 15), // April 15, 2025
    type: "planting",
    crop: "Rice",
    description: "Plant rice seedlings"
  },
  {
    date: new Date(2025, 3, 20), // April 20, 2025
    type: "fertilizing",
    crop: "Wheat",
    description: "Apply NPK fertilizer"
  },
  {
    date: new Date(2025, 3, 25), // April 25, 2025
    type: "watering",
    crop: "Cotton",
    description: "Irrigation scheduled"
  },
  {
    date: new Date(2025, 4, 5), // May 5, 2025
    type: "harvesting",
    crop: "Maize",
    description: "Harvest maize crop"
  },
];

export function CropCalendar({ events = sampleEvents, className }: CropCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<CropEvent[]>([]);

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      const eventsOnDate = events.filter(
        event => 
          event.date.getDate() === selectedDate.getDate() &&
          event.date.getMonth() === selectedDate.getMonth() &&
          event.date.getFullYear() === selectedDate.getFullYear()
      );
      setSelectedEvents(eventsOnDate);
    } else {
      setSelectedEvents([]);
    }
  };

  // Determine which dates have events
  const getEventDates = () => {
    const eventDates: Record<string, true> = {};
    
    events.forEach(event => {
      const dateString = event.date.toDateString();
      eventDates[dateString] = true;
    });
    
    return eventDates;
  };

  // Custom rendering function to highlight dates with events
  const eventDates = getEventDates();
  
  const renderDay = (day: Date) => {
    const dateString = day.toDateString();
    const hasEvent = eventDates[dateString];
    
    return (
      <div className="relative">
        <div>{day.getDate()}</div>
        {hasEvent && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-farm-primary rounded-full" />
        )}
      </div>
    );
  };

  const getEventTypeColor = (type: CropEvent["type"]) => {
    switch (type) {
      case "planting":
        return "bg-green-500 hover:bg-green-600";
      case "harvesting":
        return "bg-amber-500 hover:bg-amber-600";
      case "fertilizing":
        return "bg-blue-500 hover:bg-blue-600";
      case "watering":
        return "bg-sky-500 hover:bg-sky-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Crop Calendar</CardTitle>
      </CardHeader>
      <CardContent className="lg:flex gap-6">
        <div className="lg:w-1/2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            className="border rounded-md p-3"
            renderDay={renderDay}
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:w-1/2">
          <h3 className="font-medium mb-4">
            {date ? date.toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : 'Select a date'}
          </h3>
          
          {selectedEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedEvents.map((event, index) => (
                <div key={index} className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{event.crop}</h4>
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          ) : (
            date ? (
              <p className="text-gray-500">No crop events for this date.</p>
            ) : (
              <p className="text-gray-500">Select a date to view crop events.</p>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}

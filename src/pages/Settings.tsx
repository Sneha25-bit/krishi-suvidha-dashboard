
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Settings() {
  const handleSaveProfile = () => {
    toast.success("Profile updated successfully");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences updated");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal and farm details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Rajesh Singh" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+91 9876543210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" defaultValue="rajesh.singh@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Preferred Language</Label>
              <select 
                id="language"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                defaultValue="english"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="punjabi">Punjabi</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
              </select>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-4">Farm Details</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="farm-name">Farm Name</Label>
                <Input id="farm-name" defaultValue="Singh Agricultural Farm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-location">Location</Label>
                <Input id="farm-location" defaultValue="Ludhiana, Punjab" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-size">Farm Size (Acres)</Label>
                <Input id="farm-size" defaultValue="12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-type">Farm Type</Label>
                <select 
                  id="farm-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                  defaultValue="mixed"
                >
                  <option value="crop">Crop Only</option>
                  <option value="livestock">Livestock Only</option>
                  <option value="mixed">Mixed Farming</option>
                  <option value="organic">Organic Farming</option>
                </select>
              </div>
            </div>
          </div>
          
          <Button onClick={handleSaveProfile}>Save Profile</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Control what notifications you receive.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Weather Alerts</h3>
                <p className="text-sm text-muted-foreground">Receive alerts about significant weather changes</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Market Price Updates</h3>
                <p className="text-sm text-muted-foreground">Daily updates on crop prices</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Soil Condition Alerts</h3>
                <p className="text-sm text-muted-foreground">Alerts when soil conditions need attention</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Equipment Maintenance Reminders</h3>
                <p className="text-sm text-muted-foreground">Reminders for scheduled equipment maintenance</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Government Scheme Announcements</h3>
                <p className="text-sm text-muted-foreground">Updates about new agricultural schemes</p>
              </div>
              <Switch defaultChecked={false} />
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-4">Notification Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">SMS Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                </div>
                <Switch defaultChecked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch defaultChecked={false} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">WhatsApp Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive notifications via WhatsApp</p>
                </div>
                <Switch defaultChecked={true} />
              </div>
            </div>
          </div>
          
          <Button onClick={handleSaveNotifications}>Save Notification Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}

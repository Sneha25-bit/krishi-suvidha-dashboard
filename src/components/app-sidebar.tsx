
import { 
  BarChart2, 
  Droplets, 
  Calendar, 
  CloudRain, 
  Tractor, 
  Home, 
  Settings,
  Indian
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    title: "Soil Monitoring",
    path: "/soil",
    icon: Droplets,
  },
  {
    title: "Weather",
    path: "/weather",
    icon: CloudRain,
  },
  {
    title: "Crop Planning",
    path: "/crops",
    icon: Calendar,
  },
  {
    title: "Market Prices",
    path: "/market",
    icon: BarChart2,
  },
  {
    title: "Equipment",
    path: "/equipment",
    icon: Tractor,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-2 py-4">
        <span className="text-xl font-bold text-white flex items-center">
          <span className="bg-farm-primary p-1 rounded mr-2">KS</span>
          Krishi Suvidha
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton 
                    onClick={() => navigate(item.path)}
                    className={currentPath === item.path ? "bg-sidebar-accent" : ""}
                  >
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-3">
        <div className="text-xs text-white/60">
          Krishi Suvidha v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

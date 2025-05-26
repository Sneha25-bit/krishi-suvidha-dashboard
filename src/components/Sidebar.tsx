import { Home, Cloud, Sprout, TrendingUp, Settings, Wrench } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: Sprout, label: "Soil Monitoring", active: false },
    { icon: Cloud, label: "Weather", active: false },
    { icon: Sprout, label: "Crop Planning", active: false },
    { icon: TrendingUp, label: "Market Prices", active: false },
    { icon: Wrench, label: "Equipment", active: true },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-green-700 text-white">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center font-bold">
            KS
          </div>
          <span className="font-semibold">Krishi Suvidha</span>
        </div>
      </div>
      
      <div className="px-6">
        <p className="text-green-200 text-sm font-medium mb-4">Main Menu</p>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                item.active
                  ? "bg-green-800 text-white"
                  : "text-green-100 hover:bg-green-600 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-4 left-6 text-green-200 text-xs">
        Krishi Suvidha v1.0
      </div>
    </div>
  );
};

export default Sidebar;

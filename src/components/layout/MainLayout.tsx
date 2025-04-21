
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <SidebarTrigger className="lg:hidden mr-4" />
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-farm-text">
                Welcome, Farmer
              </div>
              <div className="w-10 h-10 bg-farm-primary rounded-full flex items-center justify-center text-white">
                KS
              </div>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

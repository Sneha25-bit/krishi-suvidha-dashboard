import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AddEquipment from "@/components/AddEquipment";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Farm Equipment</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200">
            
            <div className="p-6">
              <AddEquipment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: "operational" | "maintenance" | "repair";
  lastMaintenance: string;
  nextMaintenance: string;
  image?: string;
}

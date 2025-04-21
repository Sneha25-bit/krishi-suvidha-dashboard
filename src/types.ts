
export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: "functional" | "needs-maintenance" | "out-of-service";
  lastMaintenance: string;
  nextMaintenance: string;
  image?: string;
}

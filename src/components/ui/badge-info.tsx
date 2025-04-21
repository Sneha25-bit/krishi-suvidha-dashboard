
import { Info } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeInfoProps {
  children: ReactNode;
  className?: string;
}

export function BadgeInfo({ children, className }: BadgeInfoProps) {
  return (
    <div className={cn("flex items-start", className)}>
      <Info className="h-5 w-5 text-farm-primary mr-2 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </div>
  );
}

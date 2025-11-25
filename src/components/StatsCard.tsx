import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: string;
  delay?: number;
}

const StatsCard = ({ title, value, icon: Icon, trend, delay = 0 }: StatsCardProps) => {
  return (
    <Card
      className="glass p-6 hover-scale transition-smooth"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-accent rounded-lg">
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
        {trend && (
          <span className="text-xs text-accent font-medium">{trend}</span>
        )}
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </Card>
  );
};

export default StatsCard;

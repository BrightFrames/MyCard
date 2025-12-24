import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  icon: LucideIcon;
  progress?: number;
  className?: string;
  delay?: number;
}

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  progress,
  className,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "group relative bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</p>
          </div>
          <p className="text-4xl font-bold text-foreground tracking-tight">{value}</p>
          {trend && (
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold",
                  trend.positive
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive"
                )}
              >
                <span className="text-sm">{trend.positive ? "↗" : "↘"}</span>
                <span>{trend.value}</span>
              </div>
            </div>
          )}
          {subtitle && (
            <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
          )}
        </div>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      </div>
      {progress !== undefined && (
        <div className="mt-6 relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Capacity</span>
            <span className="text-xs font-bold text-foreground">{progress}%</span>
          </div>
          <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

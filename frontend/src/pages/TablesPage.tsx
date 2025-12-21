import { motion } from "framer-motion";
import { Users, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TableData {
  id: string;
  name: string;
  seats: number;
  status: "Available" | "Occupied" | "Reserved";
  customer?: string;
  duration?: string;
}

const tables: TableData[] = [
  { id: "1", name: "T1", seats: 4, status: "Occupied", customer: "Walk-in", duration: "45 min" },
  { id: "2", name: "T2", seats: 2, status: "Available" },
  { id: "3", name: "T3", seats: 6, status: "Reserved", customer: "Sharma Family" },
  { id: "4", name: "T4", seats: 4, status: "Available" },
  { id: "5", name: "T5", seats: 8, status: "Occupied", customer: "Birthday Party", duration: "1h 20min" },
  { id: "6", name: "T6", seats: 2, status: "Available" },
];

const statusColors = {
  Available: "bg-success/10 border-success/30 text-success",
  Occupied: "bg-accent/10 border-accent/30 text-accent",
  Reserved: "bg-warning/10 border-warning/30 text-warning",
};

const TablesPage = () => {
  const occupied = tables.filter((t) => t.status === "Occupied").length;
  const available = tables.filter((t) => t.status === "Available").length;
  const reserved = tables.filter((t) => t.status === "Reserved").length;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground">Active Tables</h1>
        <p className="text-muted-foreground">Monitor and manage table occupancy</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Available</p>
            <p className="text-2xl font-bold text-foreground">{available}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="stat-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Users className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Occupied</p>
            <p className="text-2xl font-bold text-foreground">{occupied}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
            <Clock className="w-6 h-6 text-warning" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Reserved</p>
            <p className="text-2xl font-bold text-foreground">{reserved}</p>
          </div>
        </motion.div>
      </div>

      {/* Tables Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="card-elevated p-6"
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">Floor Plan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tables.map((table, index) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className={cn(
                "p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md",
                statusColors[table.status]
              )}
            >
              <div className="text-center">
                <p className="text-2xl font-bold">Table {table.name}</p>
                <p className="text-xs opacity-70">{table.seats} seats</p>
                <div className="mt-2 pt-2 border-t border-current/20">
                  <p className="text-xs font-medium">{table.status}</p>
                  {table.customer && (
                    <p className="text-xs opacity-70 mt-1">{table.customer}</p>
                  )}
                  {table.duration && (
                    <p className="text-xs opacity-70">{table.duration}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TablesPage;

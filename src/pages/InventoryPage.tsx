import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Edit, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  unit: string;
  lastUpdated: string;
}

const inventoryItems: InventoryItem[] = [
  { id: "1", name: "Chicken", category: "Proteins", stock: 25, minStock: 10, unit: "kg", lastUpdated: "Today" },
  { id: "2", name: "Paneer", category: "Dairy", stock: 8, minStock: 5, unit: "kg", lastUpdated: "Today" },
  { id: "3", name: "Rice", category: "Grains", stock: 50, minStock: 20, unit: "kg", lastUpdated: "Yesterday" },
  { id: "4", name: "Onions", category: "Vegetables", stock: 3, minStock: 15, unit: "kg", lastUpdated: "2 days ago" },
  { id: "5", name: "Tomatoes", category: "Vegetables", stock: 12, minStock: 10, unit: "kg", lastUpdated: "Today" },
  { id: "6", name: "Cooking Oil", category: "Oils", stock: 20, minStock: 10, unit: "L", lastUpdated: "3 days ago" },
];

const InventoryPage = () => {
  const [items] = useState<InventoryItem[]>(inventoryItems);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const lowStockCount = items.filter((item) => item.stock < item.minStock).length;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-foreground">Inventory</h1>
          <p className="text-muted-foreground">Track and manage your stock levels</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
      </motion.div>

      {/* Low Stock Alert */}
      {lowStockCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 flex items-center gap-3"
        >
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <p className="text-sm font-medium text-destructive">
            {lowStockCount} item{lowStockCount > 1 ? "s" : ""} running low on stock
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="card-elevated"
      >
        <div className="p-4 border-b border-border">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item, index) => {
              const stockPercentage = (item.stock / (item.minStock * 2)) * 100;
              const isLow = item.stock < item.minStock;

              return (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  className="border-b border-border last:border-0 hover:bg-secondary/30"
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {isLow && (
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.category}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className={cn("font-medium", isLow && "text-destructive")}>
                          {item.stock} {item.unit}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          min: {item.minStock}
                        </span>
                      </div>
                      <Progress
                        value={Math.min(stockPercentage, 100)}
                        className={cn("h-2", isLow && "[&>div]:bg-destructive")}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </motion.tr>
              );
            })}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
};

export default InventoryPage;

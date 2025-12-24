import { Eye, FileEdit } from "lucide-react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Order {
  id: string;
  orderId: string;
  table: string;
  status: "Served" | "Pending" | "Preparing";
  dateTime: string;
  amount: string;
}

interface RecentOrdersTableProps {
  orders: Order[];
}

const statusStyles = {
  Served: "badge-success",
  Pending: "badge-warning",
  Preparing: "badge-pending",
};

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">Recent Orders</h2>
            <p className="text-sm text-muted-foreground mt-1">Latest customer transactions</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-xs font-semibold">
            {orders.length} orders
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border/50">
              <TableHead className="text-xs font-bold text-muted-foreground uppercase tracking-wider py-4">
                Order ID
              </TableHead>
              <TableHead className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Table / Customer
              </TableHead>
              <TableHead className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Date/Time
              </TableHead>
              <TableHead className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">
                Amount
              </TableHead>
              <TableHead className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="border-b border-border/30 last:border-0 hover:bg-secondary/50 transition-colors"
              >
                <TableCell className="font-semibold text-foreground py-4">
                  {order.orderId}
                </TableCell>
                <TableCell className="text-muted-foreground font-medium">
                  {order.table}
                </TableCell>
                <TableCell>
                  <span className={cn(statusStyles[order.status])}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {order.dateTime}
                </TableCell>
                <TableCell className="text-right font-bold text-foreground">
                  {order.amount}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary">
                      <FileEdit className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>
    </motion.div>
  );
}

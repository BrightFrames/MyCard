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
      transition={{ duration: 0.4, delay: 0.3 }}
      className="card-elevated overflow-hidden"
    >
      <div className="p-4 md:p-5 border-b border-border">
        <h2 className="text-base md:text-lg font-semibold text-foreground">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto -mx-px">
        <div className="min-w-[640px]">
          <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Order ID
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Table / Customer
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Date/Time
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                Amount
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
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
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
              >
                <TableCell className="font-medium text-foreground">
                  {order.orderId}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.table}
                </TableCell>
                <TableCell>
                  <span className={cn(statusStyles[order.status])}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.dateTime}
                </TableCell>
                <TableCell className="text-right font-semibold text-foreground">
                  {order.amount}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
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

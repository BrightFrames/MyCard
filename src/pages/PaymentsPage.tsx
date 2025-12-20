import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Download, CreditCard, Wallet, Banknote } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Payment {
  id: string;
  orderId: string;
  customer: string;
  amount: string;
  method: "Card" | "Cash" | "UPI";
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

const payments: Payment[] = [
  { id: "1", orderId: "R5_1766159135201_264", customer: "Walk-in", amount: "₹58.80", method: "UPI", status: "Completed", date: "12/19/2025, 9:15 PM" },
  { id: "2", orderId: "R5_1766000707030_935", customer: "Rahul K.", amount: "₹58.80", method: "Card", status: "Completed", date: "12/18/2025, 1:15 AM" },
  { id: "3", orderId: "R5_1765999199232_583", customer: "Walk-in", amount: "₹58.80", method: "Cash", status: "Completed", date: "12/18/2025, 12:49 AM" },
  { id: "4", orderId: "R5_1765473494526_485", customer: "Priya S.", amount: "₹58.80", method: "UPI", status: "Pending", date: "12/11/2025, 10:48 PM" },
  { id: "5", orderId: "R5_1765473357818_764", customer: "Walk-in", amount: "₹12.60", method: "Cash", status: "Completed", date: "12/11/2025, 10:45 PM" },
];

const methodIcons = {
  Card: CreditCard,
  Cash: Banknote,
  UPI: Wallet,
};

const PaymentsPage = () => {
  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter(
    (p) =>
      p.orderId.toLowerCase().includes(search.toLowerCase()) ||
      p.customer.toLowerCase().includes(search.toLowerCase())
  );

  const totalCompleted = payments
    .filter((p) => p.status === "Completed")
    .reduce((sum, p) => sum + parseFloat(p.amount.replace("₹", "")), 0);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payments</h1>
          <p className="text-muted-foreground">Track all payment transactions</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card"
        >
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold text-foreground">₹{totalCompleted.toFixed(2)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="stat-card"
        >
          <p className="text-sm text-muted-foreground">Card Payments</p>
          <p className="text-2xl font-bold text-foreground">
            {payments.filter((p) => p.method === "Card").length}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card"
        >
          <p className="text-sm text-muted-foreground">UPI Payments</p>
          <p className="text-2xl font-bold text-foreground">
            {payments.filter((p) => p.method === "UPI").length}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="stat-card"
        >
          <p className="text-sm text-muted-foreground">Cash Payments</p>
          <p className="text-2xl font-bold text-foreground">
            {payments.filter((p) => p.method === "Cash").length}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card-elevated"
      >
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search payments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Methods</SelectItem>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="upi">UPI</SelectItem>
              <SelectItem value="cash">Cash</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayments.map((payment, index) => {
              const MethodIcon = methodIcons[payment.method];
              return (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.03 }}
                  className="border-b border-border last:border-0 hover:bg-secondary/30"
                >
                  <TableCell className="font-medium">{payment.orderId}</TableCell>
                  <TableCell className="text-muted-foreground">{payment.customer}</TableCell>
                  <TableCell className="font-semibold">{payment.amount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MethodIcon className="w-4 h-4 text-muted-foreground" />
                      <span>{payment.method}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        payment.status === "Completed"
                          ? "badge-success"
                          : payment.status === "Pending"
                          ? "badge-warning"
                          : "badge-pending"
                      }
                    >
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{payment.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
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

export default PaymentsPage;

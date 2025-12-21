import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Edit, Trash2, Copy, Tag } from "lucide-react";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PromoCode {
  id: string;
  code: string;
  discount: string;
  type: "Percentage" | "Fixed";
  usageLimit: number;
  usageCount: number;
  validUntil: string;
  status: "Active" | "Expired" | "Disabled";
}

const promoCodes: PromoCode[] = [
  { id: "1", code: "WELCOME20", discount: "20%", type: "Percentage", usageLimit: 100, usageCount: 45, validUntil: "2025-01-31", status: "Active" },
  { id: "2", code: "FLAT50", discount: "₹50", type: "Fixed", usageLimit: 50, usageCount: 50, validUntil: "2025-12-15", status: "Expired" },
  { id: "3", code: "NEWYEAR25", discount: "25%", type: "Percentage", usageLimit: 200, usageCount: 12, validUntil: "2026-01-01", status: "Active" },
  { id: "4", code: "SPECIAL10", discount: "10%", type: "Percentage", usageLimit: 500, usageCount: 234, validUntil: "2025-12-31", status: "Active" },
];

const PromosPage = () => {
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const filteredCodes = promoCodes.filter((code) =>
    code.code.toLowerCase().includes(search.toLowerCase())
  );

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: `Promo code "${code}" copied to clipboard.`,
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-foreground">Promo Codes</h1>
          <p className="text-muted-foreground">Create and manage promotional codes</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 w-full sm:w-auto">
              <Plus className="w-4 h-4" />
              Create Code
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Promo Code</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Code</Label>
                <Input placeholder="e.g., SUMMER20" className="uppercase" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Discount</Label>
                  <Input placeholder="20" type="number" />
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option value="percentage">Percentage (%)</option>
                    <option value="fixed">Fixed (₹)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Usage Limit</Label>
                  <Input placeholder="100" type="number" />
                </div>
                <div className="space-y-2">
                  <Label>Valid Until</Label>
                  <Input type="date" />
                </div>
              </div>
              <Button className="w-full">Create Promo Code</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Tag className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Codes</p>
            <p className="text-2xl font-bold text-foreground">{promoCodes.length}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="stat-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
            <Tag className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-foreground">
              {promoCodes.filter((c) => c.status === "Active").length}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Tag className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Redemptions</p>
            <p className="text-2xl font-bold text-foreground">
              {promoCodes.reduce((sum, c) => sum + c.usageCount, 0)}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="card-elevated"
      >
        <div className="p-4 border-b border-border">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search promo codes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Valid Until</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
            {filteredCodes.map((promo, index) => (
              <motion.tr
                key={promo.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.03 }}
                className="border-b border-border last:border-0 hover:bg-secondary/30"
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <code className="bg-secondary px-2 py-1 rounded text-sm font-mono font-semibold">
                      {promo.code}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => copyCode(promo.code)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="font-semibold">{promo.discount}</TableCell>
                <TableCell className="text-muted-foreground">
                  {promo.usageCount} / {promo.usageLimit}
                </TableCell>
                <TableCell className="text-muted-foreground">{promo.validUntil}</TableCell>
                <TableCell>
                  <span
                    className={
                      promo.status === "Active"
                        ? "badge-success"
                        : promo.status === "Expired"
                        ? "badge-pending"
                        : "badge-warning"
                    }
                  >
                    {promo.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="w-4 h-4" />
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
    </div>
  );
};

export default PromosPage;

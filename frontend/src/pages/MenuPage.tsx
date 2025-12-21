import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Edit, Trash2, Image } from "lucide-react";
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

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  status: "Active" | "Inactive";
}

const sampleMenuItems: MenuItem[] = [
  { id: "1", name: "Butter Chicken", category: "Main Course", price: "₹280", status: "Active" },
  { id: "2", name: "Paneer Tikka", category: "Starters", price: "₹180", status: "Active" },
  { id: "3", name: "Biryani", category: "Main Course", price: "₹220", status: "Active" },
  { id: "4", name: "Dal Makhani", category: "Main Course", price: "₹160", status: "Active" },
  { id: "5", name: "Naan", category: "Breads", price: "₹40", status: "Active" },
  { id: "6", name: "Gulab Jamun", category: "Desserts", price: "₹80", status: "Inactive" },
];

const MenuPage = () => {
  const [items] = useState<MenuItem[]>(sampleMenuItems);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-foreground">Menu Management</h1>
          <p className="text-muted-foreground">Manage your restaurant menu items</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Menu Item</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Item Name</Label>
                <Input placeholder="Enter item name" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input placeholder="Enter category" />
              </div>
              <div className="space-y-2">
                <Label>Price</Label>
                <Input placeholder="₹0.00" />
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Image className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Drop image here or click to upload</p>
              </div>
              <Button className="w-full">Save Item</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-elevated"
      >
        <div className="p-4 border-b border-border">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search menu items..."
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
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                className="border-b border-border last:border-0 hover:bg-secondary/30"
              >
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-muted-foreground">{item.category}</TableCell>
                <TableCell className="font-semibold">{item.price}</TableCell>
                <TableCell>
                  <span
                    className={
                      item.status === "Active" ? "badge-success" : "badge-pending"
                    }
                  >
                    {item.status}
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
      </motion.div>
    </div>
  );
};

export default MenuPage;

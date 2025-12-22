import { Card } from "@/components/ui/card";
import { Package, Eye, Truck } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MyOrders = () => {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const orders = [
        { id: 1, orderDate: 'May 16, 2025 02:11 PM', activationCode: 'loWpJA2CWUAmq9nrggLx9PLtl', orderId: 'OD628624884991377494627', attachment: 'https://i.pravatar.cc/150?img=1', item: 'Metal NFC Card', status: 'Delivered', price: '$49.99' },
        { id: 2, orderDate: 'May 16, 2025 01:47 PM', activationCode: '-', orderId: 'OD461596492218980608895', attachment: null, item: 'PVC NFC Card', status: 'Processing', price: '$29.99' },
        { id: 3, orderDate: 'Feb 26, 2025 06:27 PM', activationCode: '-', orderId: 'OD277033259940193232093253', attachment: null, item: 'Metal NFC Card', status: 'Shipped', price: '$49.99' },
        { id: 4, orderDate: 'Feb 26, 2025 12:41 PM', activationCode: 'AXZQ9W59bONQwQrElIJcxPhF', orderId: 'OD261560934055838578040474', attachment: 'https://i.pravatar.cc/150?img=2', item: 'Wooden NFC Card', status: 'Delivered', price: '$39.99' },
        { id: 5, orderDate: 'Feb 26, 2025 12:40 PM', activationCode: 'W94v3MNL97RbdxXxcKQRCuWwG', orderId: 'OD810208814385492455654648', attachment: null, item: 'Metal NFC Card', status: 'Cancelled', price: '$49.99' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-700';
            case 'Processing': return 'bg-blue-100 text-blue-700';
            case 'Shipped': return 'bg-indigo-100 text-indigo-700';
            case 'Cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto animate-fade-in-up">
            <Card className="border-gray-200 shadow-sm">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Show</span>
                            <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                                <SelectTrigger className="w-20 h-9">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="25">25</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="text-sm text-gray-600">entries</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Search:</span>
                            <Input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-48 h-9"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="font-semibold text-gray-700">#</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Order Date</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Order ID</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Item</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                                    <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedOrder(order)}>
                                        <TableCell className="font-medium text-gray-900">{order.id}</TableCell>
                                        <TableCell className="text-gray-600">{order.orderDate}</TableCell>
                                        <TableCell className="text-indigo-600 font-mono text-sm">{order.orderId.substring(0, 10)}...</TableCell>
                                        <TableCell className="font-medium text-gray-900">{order.item}</TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(order.status)} variant="secondary">
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); setSelectedOrder(order); }}>
                                                <Eye className="w-4 h-4 text-gray-500" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">Showing 1 to {orders.length} of {orders.length} entries</p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" disabled className="text-gray-400">Previous</Button>
                            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">1</Button>
                            <Button variant="outline" size="sm" disabled className="text-gray-400">Next</Button>
                        </div>
                    </div>
                </div>
            </Card>

            <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
                <DialogContent className="max-w-xl">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle>Order Details</DialogTitle>
                            {selectedOrder && <Badge className={getStatusColor(selectedOrder.status)}>{selectedOrder.status}</Badge>}
                        </div>
                        <DialogDescription>
                            Order ID: <span className="font-mono text-xs">{selectedOrder?.orderId}</span>
                        </DialogDescription>
                    </DialogHeader>
                    {selectedOrder && (
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-muted/40 rounded-lg">
                                <div className="w-16 h-16 bg-white rounded border flex items-center justify-center">
                                    <Package className="w-8 h-8 text-indigo-300" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-lg">{selectedOrder.item}</h4>
                                    <p className="text-muted-foreground text-sm">{selectedOrder.price}</p>
                                    <p className="text-xs text-muted-foreground mt-1">Quanity: 1</p>
                                </div>
                            </div>

                            <Separator />

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Order Date</span>
                                    <p className="mt-1">{selectedOrder.orderDate}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Activation Code</span>
                                    <p className="mt-1 font-mono bg-muted inline-block px-2 py-0.5 rounded">{selectedOrder.activationCode}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Shipping Address</span>
                                <p className="text-sm">
                                    John Doe<br />
                                    123 Business Street, Tech Park<br />
                                    San Francisco, CA 94107<br />
                                    USA
                                </p>
                            </div>

                            {selectedOrder.status === 'Shipped' && (
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                                    <Truck className="w-4 h-4 mr-2" /> Track Order
                                </Button>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default MyOrders;

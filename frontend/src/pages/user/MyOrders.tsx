import { Card } from "@/components/ui/card";
import { Package, MoreVertical } from "lucide-react";
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

const MyOrders = () => {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState("10");

    const orders = [
        { id: 1, orderDate: 'May 16, 2025 02:11 PM', activationCode: 'loWpJA2CWUAmq9nrggLx9PLtl', orderId: 'OD628624884991377494627', attachment: 'https://i.pravatar.cc/150?img=1', item: 'Metal NFC Card' },
        { id: 2, orderDate: 'May 16, 2025 01:47 PM', activationCode: '-', orderId: 'OD461596492218980608895', attachment: null, item: 'Metal NFC Card' },
        { id: 3, orderDate: 'Feb 26, 2025 06:27 PM', activationCode: '-', orderId: 'OD277033259940193232093253', attachment: null, item: 'Metal NFC Card' },
        { id: 4, orderDate: 'Feb 26, 2025 12:41 PM', activationCode: 'AXZQ9W59bONQwQrElIJcxPhF', orderId: 'OD261560934055838578040474', attachment: 'https://i.pravatar.cc/150?img=2', item: 'Wooden NFC Card' },
        { id: 5, orderDate: 'Feb 26, 2025 12:40 PM', activationCode: 'W94v3MNL97RbdxXxcKQRCuWwG', orderId: 'OD810208814385492455654648', attachment: null, item: 'Metal NFC Card' },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
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
                                    <TableHead className="font-semibold text-gray-700">Activation Code</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Order ID</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Attachments</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Item</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id} className="hover:bg-gray-50">
                                        <TableCell className="font-medium text-gray-900">{order.id}</TableCell>
                                        <TableCell className="text-gray-600">{order.orderDate}</TableCell>
                                        <TableCell className="text-indigo-600 font-mono text-sm">{order.activationCode}</TableCell>
                                        <TableCell className="text-indigo-600 font-mono text-sm">{order.orderId}</TableCell>
                                        <TableCell>
                                            {order.attachment ? (
                                                <img src={order.attachment} alt="" className="w-10 h-10 rounded-full object-cover" />
                                            ) : (
                                                <span className="text-gray-400">-</span>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium text-gray-900">{order.item}</TableCell>
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
        </div>
    );
};

export default MyOrders;

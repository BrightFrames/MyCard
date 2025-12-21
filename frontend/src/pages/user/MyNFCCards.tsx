import { Card } from "@/components/ui/card";
import { CreditCard, Plus, MoreVertical } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MyNFCCards = () => {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState("10");

    const nfcCards = [
        { id: 1, date: 'May 16, 2025', cardName: 'Metal NFC Card', linkedCard: 'Sneha Digital Card', status: 'linked' },
        { id: 2, date: 'May 16, 2025', cardName: 'Metal NFC Card', linkedCard: '-', status: 'unlinked' },
        { id: 3, date: 'Feb 26, 2025', cardName: 'Wooden NFC Card', linkedCard: 'Rajesh Business Card', status: 'linked' },
        { id: 4, date: 'Feb 26, 2025', cardName: 'Metal NFC Card', linkedCard: '-', status: 'unlinked' },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <Card className="border-gray-200 shadow-sm">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Activate NFC Card
                        </Button>
                    </div>

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
                                    <TableHead className="font-semibold text-gray-700">Date</TableHead>
                                    <TableHead className="font-semibold text-gray-700">NFC Card Name</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Linked Card</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Linked Status</TableHead>
                                    <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {nfcCards.map((card) => (
                                    <TableRow key={card.id} className="hover:bg-gray-50">
                                        <TableCell className="font-medium text-gray-900">{card.id}</TableCell>
                                        <TableCell className="text-gray-600">{card.date}</TableCell>
                                        <TableCell className="font-medium text-gray-900">{card.cardName}</TableCell>
                                        <TableCell className="text-gray-600">{card.linkedCard}</TableCell>
                                        <TableCell>
                                            <Badge className={card.status === 'linked' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'}>
                                                {card.status === 'linked' ? 'Linked' : 'Unlinked'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem>View</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">Showing 1 to {nfcCards.length} of {nfcCards.length} entries</p>
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

export default MyNFCCards;

import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Smartphone, Plus, MoreVertical, Eye, Edit, Trash2, Search } from 'lucide-react';
import { MOCK_CARDS } from "@/lib/mock-data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const MyCards = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const userCards = MOCK_CARDS.filter(c => c.userId === 'u2');

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-1">Overview</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Business Cards</h2>
                </div>
                <Button onClick={() => navigate('/dashboard/cards/new')} className="bg-indigo-600 hover:bg-indigo-700">
                    Create new vcard
                </Button>
            </div>

            <Card className="border-gray-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 dark:text-slate-400">Show</span>
                            <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                                <SelectTrigger className="w-20 h-9 bg-white dark:bg-slate-950 border-gray-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="25">25</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="text-sm text-gray-600 dark:text-slate-400">entries</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 dark:text-slate-400">Search:</span>
                            <Input
                                type="search"
                                placeholder=""
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-48 h-9 bg-white dark:bg-slate-950 border-gray-200 dark:border-slate-800 text-slate-900 dark:text-slate-100"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-50 dark:hover:bg-slate-800/50">
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">#</TableHead>
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">Date</TableHead>
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">Type</TableHead>
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">Name</TableHead>
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">Views</TableHead>
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">Status</TableHead>
                                    <TableHead className="font-semibold text-gray-700 dark:text-slate-300">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {userCards.map((card, idx) => (
                                    <TableRow key={card.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 border-gray-200 dark:border-slate-800">
                                        <TableCell className="font-medium text-gray-900 dark:text-slate-100">{idx + 1}</TableCell>
                                        <TableCell className="text-gray-600 dark:text-slate-400">Nov 24, 2025 08:05 AM</TableCell>
                                        <TableCell>
                                            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1">
                                                BUSINESS
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-slate-100">{card.data.name}</p>
                                                <p className="text-sm text-gray-500 dark:text-slate-500">{card.data.title}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium text-gray-900 dark:text-slate-100">{card.stats.views}</TableCell>
                                        <TableCell>
                                            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1">
                                                Enabled
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-100">
                                                        Actions
                                                        <MoreVertical className="w-4 h-4 ml-1" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => navigate(`/dashboard/cards/${card.id}/edit`)}>
                                                        <Edit className="w-4 h-4 mr-2" /> Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => window.open(`/c/${card.slug}`, '_blank')}>
                                                        <Eye className="w-4 h-4 mr-2" /> View
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600 focus:text-red-600">
                                                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-slate-800">
                        <p className="text-sm text-gray-600 dark:text-slate-400">Showing 1 to {userCards.length} of {userCards.length} entries</p>
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

export default MyCards;

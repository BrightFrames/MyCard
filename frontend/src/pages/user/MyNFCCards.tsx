import { Card } from "@/components/ui/card";
import { CreditCard, Plus, MoreVertical, Link as LinkIcon, Lock } from "lucide-react";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const MyNFCCards = () => {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const [isActivateOpen, setIsActivateOpen] = useState(false);
    const [isLinkOpen, setIsLinkOpen] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

    const [nfcCards, setNfcCards] = useState([
        { id: 1, date: 'May 16, 2025', cardName: 'Metal NFC Card', linkedCard: 'Sneha Digital Card', status: 'linked' },
        { id: 2, date: 'May 16, 2025', cardName: 'Metal NFC Card', linkedCard: '-', status: 'unlinked' },
        { id: 3, date: 'Feb 26, 2025', cardName: 'Wooden NFC Card', linkedCard: 'Rajesh Business Card', status: 'linked' },
        { id: 4, date: 'Feb 26, 2025', cardName: 'Metal NFC Card', linkedCard: '-', status: 'unlinked' },
    ]);

    const handleActivate = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("NFC Card activated successfully!");
        setIsActivateOpen(false);
        // Mock addition
        const newCard = { id: Date.now(), date: 'Just now', cardName: 'New NFC Card', linkedCard: '-', status: 'unlinked' };
        setNfcCards([newCard, ...nfcCards]);
    };

    const handleLink = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Card linked successfully!");
        setIsLinkOpen(false);
        setNfcCards(nfcCards.map(c => c.id === selectedCardId ? { ...c, status: 'linked', linkedCard: 'My Personal Card' } : c));
    };

    const openLinkModal = (id: number) => {
        setSelectedCardId(id);
        setIsLinkOpen(true);
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto animate-fade-in-up">
            <Card className="border-gray-200 shadow-sm">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <Dialog open={isActivateOpen} onOpenChange={setIsActivateOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Activate NFC Card
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Activate New NFC Card</DialogTitle>
                                    <DialogDescription>Enter the activation code found on your physical card packaging.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleActivate} className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="code">Activation Code</Label>
                                        <Input id="code" placeholder="XXXX-XXXX-XXXX" required />
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Activate Card</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
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
                                                    {card.status === 'unlinked' ? (
                                                        <DropdownMenuItem onClick={() => openLinkModal(card.id)}>
                                                            <LinkIcon className="mr-2 h-4 w-4" /> Link Card
                                                        </DropdownMenuItem>
                                                    ) : (
                                                        <DropdownMenuItem onClick={() => toast.info('Unlink feature coming soon')}>
                                                            <Lock className="mr-2 h-4 w-4" /> Unlink
                                                        </DropdownMenuItem>
                                                    )}
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

            {/* Link Card Modal */}
            <Dialog open={isLinkOpen} onOpenChange={setIsLinkOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Link Digital Card</DialogTitle>
                        <DialogDescription>Select a digital card to link with this NFC card.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLink} className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label>Select Card</Label>
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose a card..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="card1">My Personal Card</SelectItem>
                                    <SelectItem value="card2">Business Design Studio</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Link Card</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default MyNFCCards;

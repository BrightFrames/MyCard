import { MOCK_CARDS } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MoreHorizontal, ExternalLink, Eye, Ban, Trash2, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Link } from 'react-router-dom';

const VCardManagement = () => {
    const [isTableOpen, setIsTableOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">vCard Management</h2>
                    <p className="text-muted-foreground mt-1">Monitor and control all created digital cards.</p>
                </div>
            </div>

            <Card className="card-elevated border-none overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle className="text-lg font-semibold">Digital Cards</CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsTableOpen(!isTableOpen)}
                        className="h-8 w-8 p-0"
                    >
                        {isTableOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </CardHeader>
                {isTableOpen && (
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Card Name</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Owner</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Template</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stats</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {MOCK_CARDS.map((card) => (
                                        <tr key={card.id} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    {card.data.avatarUrl ? (
                                                        <img src={card.data.avatarUrl} alt="" className="w-9 h-9 rounded-full object-cover border border-border" />
                                                    ) : (
                                                        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
                                                            {card.data.name.charAt(0)}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="font-medium text-foreground">{card.data.name}</div>
                                                        <div className="text-sm text-muted-foreground">/{card.slug}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                Mock Owner (ID: {card.userId})
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge variant="outline" className="capitalize text-muted-foreground">
                                                    {card.themeId}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                                                    Active
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                <div className="flex gap-3">
                                                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {card.stats.views}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                                            <MoreHorizontal className="w-4 h-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuLabel>Card Actions</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem asChild>
                                                            <Link to={`/c/${card.slug}`} target="_blank">
                                                                <ExternalLink className="w-4 h-4 mr-2" /> View Live
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => toast.success("Card stats refreshed")}>
                                                            Stats Detail
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-orange-600 focus:text-orange-600">
                                                            <Ban className="w-4 h-4 mr-2" /> Disable Card
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                                                            <Trash2 className="w-4 h-4 mr-2" /> Delete Card
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                )}
            </Card>
        </div>
    );
};

export default VCardManagement;

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Plus, MoreHorizontal, Copy, Edit, Eye, Trash2 } from 'lucide-react';
import { MOCK_CARDS } from "@/lib/mock-data";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MyCards = () => {
    const navigate = useNavigate();
    const userCards = MOCK_CARDS.filter(c => c.userId === 'u2');

    const handleCopyLink = (slug: string) => {
        navigator.clipboard.writeText(`https://mycard.com/c/${slug}`);
        toast.success("Card link copied!");
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">My vCards</h2>
                    <p className="text-muted-foreground mt-1">Manage your digital business cards.</p>
                </div>
                <Button onClick={() => navigate('/dashboard/cards/new')}>
                    <Plus className="w-4 h-4 mr-2" /> Create New Card
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userCards.map(card => (
                    <Card key={card.id} className="card-elevated border-none group hover:ring-2 hover:ring-primary/20 transition-all">
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <div className="flex items-center gap-3">
                                {card.data.avatarUrl ? (
                                    <img src={card.data.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover border border-border" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                                        {card.data.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <CardTitle className="text-base">{card.data.name}</CardTitle>
                                    <CardDescription className="text-xs truncate max-w-[150px]">{card.data.title}</CardDescription>
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => navigate(`/dashboard/cards/${card.id}/edit`)}>
                                        <Edit className="w-4 h-4 mr-2" /> Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => window.open(`/c/${card.slug}`, '_blank')}>
                                        <Eye className="w-4 h-4 mr-2" /> Preview
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleCopyLink(card.slug)}>
                                        <Copy className="w-4 h-4 mr-2" /> Copy Link
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent className="space-y-4 mt-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Status</span>
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Active</Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Views</span>
                                <span className="font-medium">{card.stats.views}</span>
                            </div>
                            <div className="p-2 bg-muted/40 rounded-lg flex items-center justify-between text-xs text-muted-foreground font-mono">
                                <span className="truncate">mycard.com/c/{card.slug}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleCopyLink(card.slug)}>
                                    <Copy className="w-3 h-3" />
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                            <Button className="w-full" variant="outline" onClick={() => navigate(`/dashboard/cards/${card.id}/edit`)}>
                                <Edit className="w-4 h-4 mr-2" /> Edit Card
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyCards;

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Ban, Filter } from 'lucide-react';
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EnquiriesModule = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Enquiries</h2>
                    <p className="text-muted-foreground mt-1">Manage incoming messages and prevent spam.</p>
                </div>
                <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" /> Filter
                </Button>
            </div>

            <Card className="card-elevated border-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">From</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">To (User)</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {[1, 2, 3].map((i) => (
                                <tr key={i} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-foreground">Visitor {i}</div>
                                        <div className="text-xs text-muted-foreground">visitor{i}@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-foreground">John Doe</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">
                                        Hi, I am interested in your services...
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">2 hrs ago</td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10" onClick={() => toast.success("Sender blocked")}>
                                            <Ban className="w-4 h-4 mr-2" /> Block Sender
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default EnquiriesModule;

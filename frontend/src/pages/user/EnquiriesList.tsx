import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail, Calendar, Trash2 } from 'lucide-react';
import { toast } from "sonner";

const EnquiriesList = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">My Enquiries</h2>
                    <p className="text-muted-foreground mt-1">Messages from your digital card visitors.</p>
                </div>
            </div>

            <Card className="card-elevated border-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">From</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {[1, 2, 3, 4].map((i) => (
                                <tr key={i} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-foreground">John Smith</div>
                                        <Badge variant="secondary" className="mt-1">General Enquiry</Badge>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-foreground space-y-1">
                                        <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-muted-foreground" /> john@example.com</div>
                                        <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-muted-foreground" /> +1 234 567 890</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs">
                                        Hi, I would like to know more about your services and pricing for web development...
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground flex items-center gap-2">
                                        <Calendar className="w-3 h-3" /> 12 Dec, 2024
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => toast.success("Enquiry deleted")}>
                                            <Trash2 className="w-4 h-4" />
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

export default EnquiriesList;

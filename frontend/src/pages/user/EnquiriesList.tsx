import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail, Calendar, Trash2, Eye, Reply } from 'lucide-react';
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { useState } from 'react';

const EnquiriesList = () => {
    const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
    const [enquiries, setEnquiries] = useState([
        { id: 1, name: "John Smith", type: "General Enquiry", email: "john@example.com", phone: "+1 234 567 890", message: "Hi, I would like to know more about your services and pricing for web development. I have a small project that needs a quick turnaround.", date: "12 Dec, 2024" },
        { id: 2, name: "Sarah Connor", type: "Project Quote", email: "sarah@skynet.com", phone: "+1 987 654 321", message: "We are looking for a security audit for our new facility. Please see attached requirements.", date: "10 Dec, 2024" },
        { id: 3, name: "Michael Doe", type: "Job Application", email: "mike.doe@gmail.com", phone: "+1 555 123 456", message: "Applying for the Senior Developer role. My portfolio is attached.", date: "05 Dec, 2024" },
    ]);

    const handleDelete = (id: number) => {
        setEnquiries(enquiries.filter(e => e.id !== id));
        toast.success("Enquiry deleted successfully");
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    };

    const handleReply = (email: string) => {
        window.location.href = `mailto:${email}`;
        toast.success("Opening email client...");
    };

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
                            {enquiries.length > 0 ? (
                                enquiries.map((enquiry) => (
                                    <tr key={enquiry.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-foreground">{enquiry.name}</div>
                                            <Badge variant="secondary" className="mt-1">{enquiry.type}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-foreground space-y-1">
                                            <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-muted-foreground" /> {enquiry.email}</div>
                                            <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-muted-foreground" /> {enquiry.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs">
                                            <p className="truncate">{enquiry.message}</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3" /> {enquiry.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            <Button variant="ghost" size="icon" onClick={() => setSelectedEnquiry(enquiry)}>
                                                <Eye className="w-4 h-4 text-indigo-600" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleReply(enquiry.email)}>
                                                <Reply className="w-4 h-4 text-emerald-600" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(enquiry.id)}>
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                                        No enquiries found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* View Details Modal */}
            <Dialog open={!!selectedEnquiry} onOpenChange={(open) => !open && setSelectedEnquiry(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enquiry Details</DialogTitle>
                        <DialogDescription>From {selectedEnquiry?.name}</DialogDescription>
                    </DialogHeader>
                    {selectedEnquiry && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-muted-foreground block">Email</span>
                                    <span className="font-medium">{selectedEnquiry.email}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block">Phone</span>
                                    <span className="font-medium">{selectedEnquiry.phone}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block">Type</span>
                                    <Badge variant="outline">{selectedEnquiry.type}</Badge>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block">Date</span>
                                    <span>{selectedEnquiry.date}</span>
                                </div>
                            </div>
                            <div className="bg-muted/50 p-3 rounded-md text-sm border">
                                <span className="text-muted-foreground block text-xs mb-1 uppercase tracking-wide">Message</span>
                                {selectedEnquiry.message}
                            </div>
                        </div>
                    )}
                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button variant="outline" onClick={() => handleReply(selectedEnquiry?.email)}>
                            <Reply className="w-4 h-4 mr-2" /> Reply via Email
                        </Button>
                        <Button variant="destructive" onClick={() => handleDelete(selectedEnquiry.id)}>Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EnquiriesList;

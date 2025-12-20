import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';

const ContactInfoEditor = ({ card }: any) => {
    return (
        <Card className="card-elevated border-none">
            <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>How people can reach you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input defaultValue={card.data.email} />
                    </div>
                    <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input defaultValue={card.data.phone} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Alternate Phome</Label>
                    <Input placeholder="+1 ..." />
                </div>
                <div className="space-y-2">
                    <Label>Website URL</Label>
                    <Input defaultValue={card.data.website} />
                </div>
                <div className="space-y-2">
                    <Label>Location / Address</Label>
                    <Input placeholder="123 Business St, Tech City" />
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold">Social Media</h3>
                    <div className="space-y-3">
                        <div className="flex gap-2">
                            <Input placeholder="Platform (e.g. LinkedIn)" className="w-1/3" defaultValue="LinkedIn" />
                            <Input placeholder="URL" className="flex-1" defaultValue={card.data.linkedin} />
                            <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
                        </div>
                        <div className="flex gap-2">
                            <Input placeholder="Platform" className="w-1/3" />
                            <Input placeholder="URL" className="flex-1" />
                            <Button variant="ghost" size="icon" className="text-secondary-foreground"><Plus className="w-4 h-4" /></Button>
                        </div>
                    </div>
                </div>

                <div className="pt-2 flex justify-end">
                    <Button>Save Contacts</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ContactInfoEditor;

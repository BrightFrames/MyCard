import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Image } from 'lucide-react';

const ServicesManager = () => {
    return (
        <Card className="card-elevated border-none">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Services & Offerings</CardTitle>
                        <CardDescription>Showcase what you do.</CardDescription>
                    </div>
                    <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" /> Add Service
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {[1, 2].map(i => (
                    <div key={i} className="border border-border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center border border-dashed">
                                    <Image className="w-6 h-6 text-muted-foreground" />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Service Name</Label>
                                    <Input defaultValue={`Service ${i}`} className="w-full md:w-64" />
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea placeholder="Describe this service..." rows={2} />
                        </div>
                        <div className="flex gap-4">
                            <Input placeholder="Price (Optional)" className="w-32" />
                            <Input placeholder="Button Label (e.g. Book Now)" defaultValue="Enquire Now" className="w-48" />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default ServicesManager;

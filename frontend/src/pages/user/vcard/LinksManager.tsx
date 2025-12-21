import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch";
import { Plus, GripVertical, Trash2, Link } from 'lucide-react';

const LinksManager = () => {
    return (
        <Card className="card-elevated border-none">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Links</CardTitle>
                        <CardDescription>Add unlimited links to your card.</CardDescription>
                    </div>
                    <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" /> Add Link
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg group">
                        <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
                        <div className="flex-1 grid gap-2">
                            <Input defaultValue={i === 1 ? "My Portfolio" : `Link Title ${i}`} className="h-8 font-medium" />
                            <Input defaultValue="https://example.com" className="h-8 text-xs text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch defaultChecked />
                            <Button variant="ghost" size="icon" className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default LinksManager;

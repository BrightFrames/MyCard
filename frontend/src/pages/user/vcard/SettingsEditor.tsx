import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const SettingsEditor = () => {
    return (
        <div className="space-y-6">
            <Card className="card-elevated border-none">
                <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                    <CardDescription>Optimize your card for search engines.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Meta Title</Label>
                        <Input placeholder="John Doe - Digital Business Card" />
                    </div>
                    <div className="space-y-2">
                        <Label>Meta Description</Label>
                        <Textarea placeholder="Connect with John Doe, Senior Developer at Tech Corp..." />
                    </div>
                </CardContent>
            </Card>

            <Card className="card-elevated border-none">
                <CardHeader>
                    <CardTitle>Privacy & Security</CardTitle>
                    <CardDescription>Manage access to your digital card.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Search Engine Indexing</Label>
                            <p className="text-sm text-muted-foreground">Allow Google to finding your card</p>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-base">Password Protection</Label>
                            <p className="text-sm text-muted-foreground">Require a PIN to view your card</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="space-y-2 pt-2">
                        <Label>Custom URL Slug</Label>
                        <div className="flex gap-2">
                            <div className="flex items-center px-3 bg-muted border rounded-l-md text-muted-foreground text-sm">
                                mycard.com/c/
                            </div>
                            <Input placeholder="johndoe" className="rounded-l-none" defaultValue="john-doe-123" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button>Save Settings</Button>
            </div>
        </div>
    );
};

export default SettingsEditor;

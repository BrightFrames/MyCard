import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Globe, Check, X, Palette } from 'lucide-react';
import { toast } from "sonner";

const DomainBranding = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Domains & Branding</h2>
                    <p className="text-muted-foreground mt-1">Manage custom domains and global branding options.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Domain Requests */}
                <Card className="card-elevated border-none">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="w-5 h-5" /> Domain Requests
                        </CardTitle>
                        <CardDescription>Approve or reject custom domain connections.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[1, 2].map(i => (
                            <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                                <div>
                                    <p className="font-medium">www.user-brand-{i}.com</p>
                                    <p className="text-xs text-muted-foreground">Requested by User #{i}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="icon" className="h-8 w-8 bg-green-600 hover:bg-green-700" onClick={() => toast.success("Domain approved")}>
                                        <Check className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="destructive" className="h-8 w-8" onClick={() => toast.success("Domain rejected")}>
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {/* Mock approved domain */}
                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                            <div>
                                <p className="font-medium text-muted-foreground">www.already-active.com</p>
                                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 mt-1">Active</Badge>
                            </div>
                            <Button variant="ghost" size="sm">Manage</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Branding Controls */}
                <Card className="card-elevated border-none">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Palette className="w-5 h-5" /> Branding Settings
                        </CardTitle>
                        <CardDescription>Control watermarks and footers.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Allow "Hide Branding"</Label>
                                <p className="text-sm text-muted-foreground">Enable for Pro plans only</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="space-y-2">
                            <Label>Footer Branding Text</Label>
                            <Input defaultValue="Powered by MyCard" />
                        </div>
                        <div className="space-y-2">
                            <Label>Favicon URL</Label>
                            <Input defaultValue="https://mycard.com/favicon.ico" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Branding</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default DomainBranding;

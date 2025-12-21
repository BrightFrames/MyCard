import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LifeBuoy, Wrench, RefreshCw, Database, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from "sonner";
import { useState } from "react";

const SupportMaintenance = () => {
    const [isTicketsOpen, setIsTicketsOpen] = useState(true);
    const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Support & Maintenance</h2>
                    <p className="text-muted-foreground mt-1">Handle user tickets and system health.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Support Tickets */}
                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <LifeBuoy className="w-5 h-5" /> Active Support Tickets
                            </CardTitle>
                            <CardDescription>Recent issues reported by users.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsTicketsOpen(!isTicketsOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isTicketsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isTicketsOpen && (
                        <>
                            <CardContent className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-start justify-between p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                                <div>
                                    <h4 className="font-semibold text-sm">Cannot upload logo image</h4>
                                    <p className="text-xs text-muted-foreground mt-1">User #{i} • 2 hours ago</p>
                                </div>
                                <Badge variant={i === 1 ? "destructive" : "secondary"}>
                                    {i === 1 ? "High" : "Normal"}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">View Helpdesk</Button>
                    </CardFooter>
                        </>
                    )}
                </Card>

                {/* Maintenance Controls */}
                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <Wrench className="w-5 h-5" /> System Maintenance
                            </CardTitle>
                            <CardDescription>Advanced system controls.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsMaintenanceOpen(!isMaintenanceOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isMaintenanceOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isMaintenanceOpen && (
                        <CardContent className="space-y-6">
                        <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <div className="space-y-0.5">
                                <Label className="text-base text-orange-900 dark:text-orange-100">Maintenance Mode</Label>
                                <p className="text-sm text-orange-700 dark:text-orange-300">Disable site access for all users</p>
                            </div>
                            <Switch />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <RefreshCw className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Clear System Cache</p>
                                        <p className="text-xs text-muted-foreground">Free up memory</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="secondary" onClick={() => toast.success("Cache cleared")}>Clear</Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <Database className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Backup Database</p>
                                        <p className="text-xs text-muted-foreground">Last backup: 1 day ago</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="secondary" onClick={() => toast.success("Backup started")}>Run Backup</Button>
                            </div>
                        </div>
                    </CardContent>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default SupportMaintenance;

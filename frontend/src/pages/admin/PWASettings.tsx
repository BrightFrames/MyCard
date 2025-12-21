import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Smartphone, Download, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const PWASettings = () => {
    const [isPwaOpen, setIsPwaOpen] = useState(true);
    const [isSmtpOpen, setIsSmtpOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">PWA & System</h2>
                    <p className="text-muted-foreground mt-1">Configure Progressive Web App and system emails.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PWA Settings */}
                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <Smartphone className="w-5 h-5" /> PWA Configuration
                            </CardTitle>
                            <CardDescription>Manage installable app features.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsPwaOpen(!isPwaOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isPwaOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isPwaOpen && (
                        <>
                            <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Enable PWA</Label>
                                <p className="text-sm text-muted-foreground">Allow users to install cards as apps</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="space-y-2">
                            <Label>App Name</Label>
                            <Input defaultValue="GoBix Cards" />
                        </div>
                        <div className="space-y-2">
                            <Label>Theme Color</Label>
                            <div className="flex gap-2">
                                <Input type="color" defaultValue="#6366f1" className="w-12 h-10 p-1" />
                                <Input defaultValue="#6366f1" className="flex-1" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Update PWA Config</Button>
                    </CardFooter>
                        </>
                    )}
                </Card>

                {/* SMTP / System Settings */}
                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="w-5 h-5" /> SMTP Settings
                            </CardTitle>
                            <CardDescription>Configure email delivery service.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsSmtpOpen(!isSmtpOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isSmtpOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isSmtpOpen && (
                        <>
                            <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>SMTP Host</Label>
                            <Input placeholder="smtp.example.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Port</Label>
                                <Input placeholder="587" />
                            </div>
                            <div className="space-y-2">
                                <Label>Encryption</Label>
                                <Input placeholder="TLS" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Username</Label>
                            <Input placeholder="user@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label>Password</Label>
                            <Input type="password" placeholder="••••••••" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">Test Connection</Button>
                        <Button className="ml-2">Save SMTP</Button>
                    </CardFooter>
                        </>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default PWASettings;

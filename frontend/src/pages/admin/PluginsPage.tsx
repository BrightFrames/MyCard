import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Puzzle, ExternalLink, RefreshCw } from "lucide-react";

const PluginsPage = () => {
    const plugins = [
        { id: 1, name: "Google Analytics", description: "Track visitor traffic and behavior on your vCards.", category: "Analytics", status: true, version: "v4.5.0" },
        { id: 2, name: "Stripe Payment", description: "Accept payments directly through your cards.", category: "Payment", status: true, version: "v2.1.0" },
        { id: 3, name: "Mailchimp", description: "Collect emails and sync with your newsletter list.", category: "Marketing", status: false, version: "v1.8.2" },
        { id: 4, name: "WhatsApp Chat", description: "Add a floating WhatsApp button for instant support.", category: "Communication", status: true, version: "v1.0.5" },
        { id: 5, name: "PayPal Integration", description: "Enable PayPal checkout for products and services.", category: "Payment", status: false, version: "v3.0.1" },
        { id: 6, name: "Custom CSS", description: "Inject custom CSS code into specific cards.", category: "Developer", status: false, version: "v1.0.0" },
        { id: 7, name: "Facebook Pixel", description: "Track conversions from Facebook ads.", category: "Marketing", status: false, version: "v2.4.5" },
        { id: 8, name: "reCAPTCHA", description: "Protect your forms from spam and bots.", category: "Security", status: true, version: "v3.0.0" },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Plugins & Integrations</h2>
                    <p className="text-muted-foreground mt-1">Extend functionality with third-party tools and modules.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Check for Updates
                    </Button>
                    <Button>
                        <Puzzle className="w-4 h-4 mr-2" />
                        Browse Marketplace
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {plugins.map((plugin) => (
                    <Card key={plugin.id} className={`border-border/60 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col ${plugin.status ? 'bg-card' : 'bg-muted/10 opacity-80 hover:opacity-100'}`}>
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div className={`p-2 rounded-lg ${plugin.status ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                    <Puzzle className="w-6 h-6" />
                                </div>
                                <Switch checked={plugin.status} />
                            </div>
                            <CardTitle className="mt-4 text-base">{plugin.name}</CardTitle>
                            <CardDescription className="line-clamp-2 min-h-[40px]">{plugin.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4 flex-1">
                            <div className="flex gap-2">
                                <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">{plugin.category}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center bg-muted/30 px-2 rounded-md">{plugin.version}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border/50">
                            <Button variant="ghost" size="sm" className="w-full justify-between group hover:text-primary">
                                Configure <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PluginsPage;

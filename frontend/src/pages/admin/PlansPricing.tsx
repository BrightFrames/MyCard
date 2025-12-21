import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Check, Edit, Plus, Trash, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const PlansPricing = () => {
    const [isPlansOpen, setIsPlansOpen] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(true);

    const plans = [
        {
            name: "Beginner",
            price: "Free",
            duration: "Lifetime",
            features: { vCards: 1, services: 0, products: 0, gallery: 0, customDomain: false }
        },
        {
            name: "Intermediate",
            price: "$9.99",
            duration: "Monthly",
            features: { vCards: 5, services: 5, products: 5, gallery: 5, customDomain: false }
        },
        {
            name: "Professional",
            price: "$29.99",
            duration: "Monthly",
            features: { vCards: 10, services: 20, products: 20, gallery: 20, customDomain: true }
        }
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Plans & Pricing</h2>
                    <p className="text-muted-foreground mt-1">Manage subscription plans and feature limits.</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Plan
                </Button>
            </div>

            <Card className="card-elevated border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle className="text-lg font-semibold">Subscription Plans</CardTitle>
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsPlansOpen(!isPlansOpen)}
                        className="h-8 w-8 p-0"
                    >
                        {isPlansOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </CardHeader>
                {isPlansOpen && (
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {plans.map((plan, idx) => (
                    <Card key={idx} className="card-elevated border-none flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                                    <CardDescription>{plan.duration}</CardDescription>
                                </div>
                                <h3 className="text-2xl font-bold">{plan.price}</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-1">
                            <div className="space-y-2">
                                <Label className="text-xs text-muted-foreground uppercase tracking-wider">Feature Limits</Label>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                                        <span>vCards</span>
                                        <span className="font-semibold">{plan.features.vCards}</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                                        <span>Services</span>
                                        <span className="font-semibold">{plan.features.services}</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                                        <span>Products</span>
                                        <span className="font-semibold">{plan.features.products}</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-muted/30 rounded">
                                        <span>Gallery</span>
                                        <span className="font-semibold">{plan.features.gallery}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <Label htmlFor={`domain-${idx}`}>Custom Domain</Label>
                                <Switch id={`domain-${idx}`} checked={plan.features.customDomain} />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor={`branding-${idx}`}>Hide Branding</Label>
                                <Switch id={`branding-${idx}`} checked={plan.name === 'Professional'} />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t border-border/50 pt-4">
                            <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-2" /> Edit Plan
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                                <Trash className="w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                        </div>
                    </CardContent>
                )}
            </Card>

            <Card className="card-elevated border-none mt-8">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <div>
                        <CardTitle>Global Plan Settings</CardTitle>
                        <CardDescription>Configure currency and general plan behavior.</CardDescription>
                    </div>
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        className="h-8 w-8 p-0"
                    >
                        {isSettingsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </CardHeader>
                {isSettingsOpen && (
                    <>
                        <CardContent className="space-y-4 md:w-1/2">
                            <div className="grid gap-2">
                                <Label>Currency Symbol</Label>
                                <Input placeholder="$" defaultValue="$" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Settings</Button>
                        </CardFooter>
                    </>
                )}
            </Card>
        </div>
    );
};

export default PlansPricing;

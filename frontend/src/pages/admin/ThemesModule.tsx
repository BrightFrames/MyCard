import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Palette, Check, Lock } from "lucide-react";

const ThemesModule = () => {
    const themes = [
        {
            id: 1,
            name: "Modern Professional",
            category: "Business",
            status: "active",
            image: "bg-gradient-to-br from-slate-900 to-slate-800",
            features: ["Dark Mode", "QR Code", "Social Links"]
        },
        {
            id: 2,
            name: "Creative Portfolio",
            category: "Personal Button",
            status: "inactive",
            image: "bg-gradient-to-br from-indigo-500 to-purple-600",
            features: ["Gallery", "Blog", "Contact Form"]
        },
        {
            id: 3,
            name: "Medical Clinic",
            category: "Health",
            status: "inactive",
            image: "bg-gradient-to-br from-emerald-400 to-teal-500",
            features: ["Appointments", "Services", "Team"]
        },
        {
            id: 4,
            name: "Restaurant Menu",
            category: "Hospitality",
            status: "inactive",
            image: "bg-gradient-to-br from-orange-400 to-red-500",
            features: ["Menu Grid", "Reservations", "Map"]
        },
        {
            id: 5,
            name: "Law Firm",
            category: "Legal",
            status: "premium",
            image: "bg-gradient-to-br from-slate-200 to-slate-300",
            features: ["Case Studies", "Team", "Consultation"]
        },
        {
            id: 6,
            name: "Tech Startup",
            category: "Technology",
            status: "locked",
            image: "bg-gradient-to-br from-blue-600 to-cyan-400",
            features: ["Product Showcase", "Pricing", "FAQ"]
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Themes & Templates</h2>
                    <p className="text-muted-foreground mt-1">Manage and customize the visual appearance of vCards.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Import Theme</Button>
                    <Button>
                        <Palette className="w-4 h-4 mr-2" />
                        Create New Theme
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {themes.map((theme) => (
                    <Card key={theme.id} className="overflow-hidden border-border/60 shadow-sm hover:shadow-card transition-all duration-300 group">
                        <div className={`h-48 w-full ${theme.image} relative flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            {theme.status === 'locked' ? (
                                <Lock className="w-12 h-12 text-white/50" />
                            ) : (
                                <div className="bg-background/90 backdrop-blur shadow-lg rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    <Eye className="w-6 h-6 text-primary" />
                                </div>
                            )}
                            <div className="absolute top-3 right-3">
                                {theme.status === 'active' && <Badge className="bg-emerald-500 hover:bg-emerald-600">Active</Badge>}
                                {theme.status === 'premium' && <Badge variant="secondary" className="bg-amber-100 text-amber-800">Premium</Badge>}
                                {theme.status === 'locked' && <Badge variant="destructive">Locked</Badge>}
                            </div>
                        </div>
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{theme.name}</CardTitle>
                                    <CardDescription>{theme.category}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                            <div className="flex flex-wrap gap-2">
                                {theme.features.map((feature, i) => (
                                    <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border/50 bg-muted/20">
                            <div className="flex w-full gap-2">
                                {theme.status === 'active' ? (
                                    <Button variant="outline" className="w-full pointer-events-none text-emerald-600 border-emerald-200 bg-emerald-50">
                                        <Check className="w-4 h-4 mr-2" /> Currently Active
                                    </Button>
                                ) : (
                                    <>
                                        <Button variant="outline" className="flex-1">Preview</Button>
                                        <Button className="flex-1" disabled={theme.status === 'locked'}>
                                            {theme.status === 'locked' ? 'Upgrade to Unlock' : 'Activate'}
                                        </Button>
                                    </>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <p className="text-sm text-muted-foreground">Showing 6 of 24 available themes</p>
            </div>
        </div>
    );
};

export default ThemesModule;

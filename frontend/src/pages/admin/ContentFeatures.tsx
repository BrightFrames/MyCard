import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ToggleLeft, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const ContentFeatures = () => {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
    const [isContentOpen, setIsContentOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Content & Features</h2>
                    <p className="text-muted-foreground mt-1">Control global features and site content.</p>
                </div>
            </div>

            <Tabs defaultValue="features">
                <TabsList>
                    <TabsTrigger value="features">Feature Toggles</TabsTrigger>
                    <TabsTrigger value="content">Site Content</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="card-elevated border-none">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <ToggleLeft className="w-5 h-5" /> Global Features
                                    </CardTitle>
                                    <CardDescription>Enable or disable features for all users.</CardDescription>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                                    className="h-8 w-8 p-0"
                                >
                                    {isFeaturesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                            </CardHeader>
                            {isFeaturesOpen && (
                                <CardContent className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">WhatsApp Chat</Label>
                                        <p className="text-sm text-muted-foreground">Allow floating chat button</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">vCard Download</Label>
                                        <p className="text-sm text-muted-foreground">Allow saving contact file</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">E-commerce Store</Label>
                                        <p className="text-sm text-muted-foreground">Allow product listing</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </CardContent>
                            )}
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="content" className="mt-4">
                    <Card className="card-elevated border-none">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <Globe className="w-5 h-5" /> Landing Page Content
                                </CardTitle>
                                <CardDescription>Update text on the home page.</CardDescription>
                            </div>
                            <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => setIsContentOpen(!isContentOpen)}
                                className="h-8 w-8 p-0"
                            >
                                {isContentOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </Button>
                        </CardHeader>
                        {isContentOpen && (
                            <>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Hero Title</Label>
                                        <Input defaultValue="Create Your Digital Business Card" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Hero Subtitle</Label>
                                        <Textarea defaultValue="Share your contact details with a single tap. Professional, modern, and eco-friendly." />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Update Content</Button>
                                </CardFooter>
                            </>
                        )}
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ContentFeatures;

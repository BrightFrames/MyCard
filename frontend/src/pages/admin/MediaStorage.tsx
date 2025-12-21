import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HardDrive, Image, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const MediaStorage = () => {
    const [isStorageOpen, setIsStorageOpen] = useState(true);
    const [isUploadsOpen, setIsUploadsOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Media & Storage</h2>
                    <p className="text-muted-foreground mt-1">Monitor storage usage and manage files.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <HardDrive className="w-5 h-5" /> Storage Usage
                            </CardTitle>
                            <CardDescription>Total space consumed vs limit.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsStorageOpen(!isStorageOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isStorageOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isStorageOpen && (
                        <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Used: 4.5 GB</span>
                                <span>Total: 100 GB</span>
                            </div>
                            <Progress value={4.5} className="h-2" />
                        </div>
                    </CardContent>
                    )}
                </Card>
            </div>

            <Card className="card-elevated border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle>Recent Uploads</CardTitle>
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsUploadsOpen(!isUploadsOpen)}
                        className="h-8 w-8 p-0"
                    >
                        {isUploadsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </CardHeader>
                {isUploadsOpen && (
                    <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="relative group rounded-lg overflow-hidden border border-border">
                                <img
                                    src={`https://placehold.co/200x200?text=Image+${i}`}
                                    alt="User upload"
                                    className="w-full aspect-square object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="destructive" size="icon" className="h-8 w-8">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                )}
            </Card>
        </div>
    );
};

export default MediaStorage;

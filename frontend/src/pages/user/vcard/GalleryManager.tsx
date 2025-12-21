import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Plus, Trash2, Upload } from 'lucide-react';

const GalleryManager = () => {
    return (
        <Card className="card-elevated border-none">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Gallery & Portfolio</CardTitle>
                        <CardDescription>Upload images of your work or products.</CardDescription>
                    </div>
                    <Button size="sm">
                        <Upload className="w-4 h-4 mr-2" /> Upload Images
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="group relative aspect-square bg-muted rounded-lg overflow-hidden border">
                            <img src={`https://placehold.co/300x300?text=Img+${i}`} className="w-full h-full object-cover" alt="" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button variant="destructive" size="icon">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <div className="aspect-square border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer transition-colors">
                        <Plus className="w-8 h-8 mb-2" />
                        <span className="text-xs">Add Image</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default GalleryManager;

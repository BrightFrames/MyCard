import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Trash2, Eye, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Media = () => {
    const totalStorage = 100; // MB
    const [usedStorage, setUsedStorage] = useState(1.89);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const [mediaList, setMediaList] = useState([
        { id: 1, name: 'Brand Logo', size: '684.25 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800' },
        { id: 2, name: 'Product Image', size: '122.09 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800' },
        { id: 3, name: 'Restaurant Banner', size: '565.23 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800' },
        { id: 4, name: 'Menu Photo', size: '65.05 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800' },
    ]);

    const availableStorage = totalStorage - usedStorage;
    const usedPercentage = (usedStorage / totalStorage) * 100;

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setUploadProgress(0);

        // Simulate upload
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    const newMedia = {
                        id: Date.now(),
                        name: file.name,
                        size: `${(file.size / 1024).toFixed(2)} KB`,
                        uploadDate: 'Just now',
                        thumbnail: URL.createObjectURL(file),
                        url: URL.createObjectURL(file)
                    };
                    setMediaList([newMedia, ...mediaList]);
                    setUsedStorage(prev => prev + (file.size / (1024 * 1024)));
                    toast.success("Image uploaded successfully");
                    return 0;
                }
                return prev + 10;
            });
        }, 300);
    };

    const handleDelete = (id: number) => {
        setMediaList(mediaList.filter(item => item.id !== id));
        toast.success("Image deleted successfully");
        setUsedStorage(prev => Math.max(0, prev - 0.5)); // Mock size reduction
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Overview</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Media Library</h2>
                </div>
                <div className="flex gap-2">
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                    <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={handleUploadClick} disabled={isUploading}>
                        {isUploading ? 'Uploading...' : 'Upload'}
                    </Button>
                </div>
            </div>

            {isUploading && (
                <Card className="border-indigo-100 bg-indigo-50/50">
                    <CardContent className="py-4">
                        <div className="flex justify-between text-sm mb-2 text-indigo-700">
                            <span>Uploading image...</span>
                            <span>{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-2 bg-indigo-200" />
                    </CardContent>
                </Card>
            )}

            {/* Storage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3">
                        <CardDescription className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Total Storage</CardDescription>
                        <CardTitle className="text-3xl font-bold text-gray-900">{totalStorage} MB</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3">
                        <CardDescription className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Used Storage</CardDescription>
                        <CardTitle className="text-3xl font-bold text-gray-900">{usedStorage.toFixed(2)} MB</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                        <Progress value={usedPercentage} className="h-2 bg-gray-200">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${usedPercentage}%` }} />
                        </Progress>
                    </CardContent>
                </Card>
                <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3">
                        <CardDescription className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Available Storage</CardDescription>
                        <CardTitle className="text-3xl font-bold text-gray-900">{availableStorage.toFixed(2)} MB</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                        <Progress value={100 - usedPercentage} className="h-2 bg-gray-200">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${100 - usedPercentage}%` }} />
                        </Progress>
                    </CardContent>
                </Card>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mediaList.map((media) => (
                    <Card key={media.id} className="border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                        <div className="aspect-square overflow-hidden bg-gray-100 relative">
                            <img src={media.thumbnail} alt={media.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                                        <div className="relative">
                                            <img src={media.url} alt={media.name} className="w-full h-auto rounded-lg" />
                                            {/* Close button not strictly needed as Dialog has one, but good for custom UI */}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <Button size="icon" variant="destructive" className="rounded-full w-8 h-8" onClick={() => handleDelete(media.id)}>
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-indigo-600">Im</span>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-sm font-medium text-gray-900 truncate" title={media.name}>{media.name}</p>
                                    <p className="text-xs text-gray-500">{media.uploadDate}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <HardDrive className="w-3 h-3" />
                                <span>{media.size}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Media;

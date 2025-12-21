import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Upload, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Media = () => {
    const totalStorage = 100; // MB
    const usedStorage = 1.89;
    const availableStorage = totalStorage - usedStorage;
    const usedPercentage = (usedStorage / totalStorage) * 100;

    const mockMedia = [
        { id: 1, name: 'Brand Logo', size: '684.25 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop' },
        { id: 2, name: 'Product Image', size: '122.09 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop' },
        { id: 3, name: 'Restaurant Banner', size: '565.23 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop' },
        { id: 4, name: 'Menu Photo', size: '65.05 KB', uploadDate: '5 months ago', thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop' },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Overview</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Media Library</h2>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Upload
                </Button>
            </div>

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
                        <CardTitle className="text-3xl font-bold text-gray-900">{usedStorage} MB</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                        <Progress value={usedPercentage} className="h-2 bg-gray-200">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: `${usedPercentage}%` }} />
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
                {mockMedia.map((media) => (
                    <Card key={media.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                        <div className="aspect-square overflow-hidden bg-gray-100">
                            <img src={media.thumbnail} alt={media.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-gray-600">U5</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-500">User</p>
                                    <p className="text-xs text-gray-400">{media.uploadDate}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <HardDrive className="w-4 h-4" />
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

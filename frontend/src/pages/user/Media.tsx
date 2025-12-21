import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const Media = () => {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Media Library</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your images and media files.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Media
                </Button>
            </div>

            <Card className="border-gray-200">
                <CardHeader className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Image className="w-8 h-8 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">No Media Files</CardTitle>
                    <CardDescription>Upload images and files to your media library</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default Media;

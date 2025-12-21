
import { MOCK_TEMPLATES } from '@/lib/mock-data';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const TemplateManager = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Templates</h2>
                    <p className="text-gray-500 mt-1">Manage card templates available to users.</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Template
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_TEMPLATES.map((template) => (
                    <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gray-100 relative">
                            <img
                                src={template.thumbnail}
                                alt={template.name}
                                className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-2 right-2 bg-white/90 text-black hover:bg-white/90">
                                {template.type}
                            </Badge>
                        </div>
                        <CardHeader>
                            <h3 className="font-bold text-lg">{template.name}</h3>
                        </CardHeader>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TemplateManager;

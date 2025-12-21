import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store } from "lucide-react";

const Stores = () => {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Stores</h2>
                <p className="text-sm text-gray-500 mt-1">Manage your business stores and locations.</p>
            </div>

            <Card className="border-gray-200">
                <CardHeader className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Store className="w-8 h-8 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">No Stores Yet</CardTitle>
                    <CardDescription>Create your first store to get started</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default Stores;

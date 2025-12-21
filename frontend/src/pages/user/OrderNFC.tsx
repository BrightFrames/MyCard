import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderNFC = () => {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Order NFC Card</h2>
                <p className="text-sm text-gray-500 mt-1">Order physical NFC cards for your business.</p>
            </div>

            <Card className="border-gray-200">
                <CardHeader className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                        <ShoppingCart className="w-8 h-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">NFC Card Orders</CardTitle>
                    <CardDescription>Get physical NFC cards delivered to your doorstep</CardDescription>
                    <div className="mt-6">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">Place New Order</Button>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};

export default OrderNFC;

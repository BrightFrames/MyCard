import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const MyNFCCards = () => {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">My NFC Cards</h2>
                <p className="text-sm text-gray-500 mt-1">Manage your physical NFC cards.</p>
            </div>

            <Card className="border-gray-200">
                <CardHeader className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <CreditCard className="w-8 h-8 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">No NFC Cards</CardTitle>
                    <CardDescription>Order NFC cards to see them here</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default MyNFCCards;

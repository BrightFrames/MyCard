import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";

const Transactions = () => {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Transactions</h2>
                <p className="text-sm text-gray-500 mt-1">View your payment history and transactions.</p>
            </div>

            <Card className="border-gray-200">
                <CardHeader className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Receipt className="w-8 h-8 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">No Transactions</CardTitle>
                    <CardDescription>Your transaction history will appear here</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default Transactions;

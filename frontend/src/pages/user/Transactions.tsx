import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Transactions = () => {
    const transactions = [
        { id: "TRX-9823", date: "22 Dec, 2024", description: "Pro Plan Subscription", amount: "$15.00", status: "Success", method: "Credit Card" },
        { id: "TRX-9822", date: "15 Dec, 2024", description: "NFC Card Order", amount: "$25.00", status: "Success", method: "PayPal" },
        { id: "TRX-9821", date: "01 Dec, 2024", description: "Domain Registration", amount: "$12.00", status: "Pending", method: "Stripe" },
        { id: "TRX-9819", date: "22 Nov, 2024", description: "Pro Plan Subscription", amount: "$15.00", status: "Success", method: "Credit Card" },
        { id: "TRX-9810", date: "15 Oct, 2024", description: "Failed Payment", amount: "$15.00", status: "Failed", method: "Credit Card" },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Transactions</h2>
                    <p className="text-sm text-gray-500 mt-1">View your payment history and invoices.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" /> Export
                    </Button>
                </div>
            </div>

            <Card className="border-gray-200 shadow-sm">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input placeholder="Search transactions..." className="pl-9" />
                        </div>
                        <Button variant="outline" size="sm" className="w-full md:w-auto">
                            <Filter className="w-4 h-4 mr-2" /> Filter
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50/50">
                                    <TableHead className="font-semibold text-gray-700">Transaction ID</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Date</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Description</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Amount</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Method</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                                    <TableHead className="font-semibold text-gray-700 text-right">Invoice</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((trx) => (
                                    <TableRow key={trx.id} className="hover:bg-gray-50/50">
                                        <TableCell className="font-medium text-gray-900">{trx.id}</TableCell>
                                        <TableCell className="text-gray-500">{trx.date}</TableCell>
                                        <TableCell className="text-gray-900">{trx.description}</TableCell>
                                        <TableCell className="font-semibold text-gray-900">{trx.amount}</TableCell>
                                        <TableCell className="text-gray-500 text-sm">{trx.method}</TableCell>
                                        <TableCell>
                                            <Badge
                                                className={`
                                                    ${trx.status === 'Success' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : ''}
                                                    ${trx.status === 'Pending' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : ''}
                                                    ${trx.status === 'Failed' ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' : ''}
                                                `}
                                                variant="outline"
                                            >
                                                {trx.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500">Showing 1 to {transactions.length} of {transactions.length} entries</p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" disabled className="text-gray-400">Previous</Button>
                            <Button size="sm" variant="outline" className="bg-gray-900 text-white hover:bg-gray-800 hover:text-white">1</Button>
                            <Button variant="outline" size="sm" disabled className="text-gray-400">Next</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Transactions;

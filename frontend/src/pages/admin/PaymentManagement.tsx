import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const PaymentManagement = () => {
    const [isTransactionsOpen, setIsTransactionsOpen] = useState(true);
    const [isStripeOpen, setIsStripeOpen] = useState(true);
    const [isGeneralOpen, setIsGeneralOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Payments</h2>
                    <p className="text-muted-foreground mt-1">Track transactions and manage gateways.</p>
                </div>
            </div>

            <Tabs defaultValue="transactions">
                <TabsList>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="settings">Payment Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="transactions" className="mt-4">
                    <Card className="card-elevated border-none">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                            <CardTitle className="text-lg font-semibold">Transaction History</CardTitle>
                            <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}
                                className="h-8 w-8 p-0"
                            >
                                {isTransactionsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </Button>
                        </CardHeader>
                        {isTransactionsOpen && (
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">User</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Plan</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-foreground">#TXN-883{i}</td>
                                            <td className="px-6 py-4 text-sm text-foreground">John Doe</td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">Professional Monthly</td>
                                            <td className="px-6 py-4 text-sm font-bold text-foreground">$29.99</td>
                                            <td className="px-6 py-4">
                                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Completed</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">Dec {12 + i}, 2025</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                            </CardContent>
                        )}
                    </Card>
                </TabsContent>

                <TabsContent value="settings" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="card-elevated border-none">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" /> Stripe Gateway
                                    </CardTitle>
                                    <CardDescription>Configure Stripe payments.</CardDescription>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => setIsStripeOpen(!isStripeOpen)}
                                    className="h-8 w-8 p-0"
                                >
                                    {isStripeOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                            </CardHeader>
                            {isStripeOpen && (
                                <>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="stripe-enabled">Enable Stripe</Label>
                                            <Switch id="stripe-enabled" defaultChecked />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Publishable Key</Label>
                                            <Input type="password" value="pk_test_..." readOnly />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Secret Key</Label>
                                            <Input type="password" value="sk_test_..." readOnly />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save Stripe Settings</Button>
                                    </CardFooter>
                                </>
                            )}
                        </Card>

                        <Card className="card-elevated border-none">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <DollarSign className="w-5 h-5" /> General Settings
                                    </CardTitle>
                                    <CardDescription>Currency and approval flow.</CardDescription>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => setIsGeneralOpen(!isGeneralOpen)}
                                    className="h-8 w-8 p-0"
                                >
                                    {isGeneralOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                            </CardHeader>
                            {isGeneralOpen && (
                                <>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label>Currency</Label>
                                            <Input defaultValue="USD ($)" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="manual-approval">Manual Payment Approval</Label>
                                            <Switch id="manual-approval" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline">Update General Settings</Button>
                                    </CardFooter>
                                </>
                            )}
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default PaymentManagement;

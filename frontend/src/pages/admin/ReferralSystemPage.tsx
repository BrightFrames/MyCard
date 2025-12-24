import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, Gift, TrendingUp, Settings } from "lucide-react";

const ReferralSystemPage = () => {
    const referrals = [
        { id: 1, referrer: "Alice Johnson", referred: "John Doe", date: "Oct 24, 2024", status: "completed", commission: "$15.00" },
        { id: 2, referrer: "Bob Smith", referred: "Jane Smith", date: "Nov 02, 2024", status: "pending", commission: "$10.00" },
        { id: 3, referrer: "Charlie Brown", referred: "Lucy Liu", date: "Nov 15, 2024", status: "completed", commission: "$25.00" },
        { id: 4, referrer: "Diana Prince", referred: "Bruce Wayne", date: "Dec 05, 2024", status: "rejected", commission: "$0.00" },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Referral System</h2>
                    <p className="text-muted-foreground mt-1">Track referrals, commissions, and affiliate performance.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                    </Button>
                    <Button>
                        <Gift className="w-4 h-4 mr-2" />
                        Create New Campaign
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Referred Users</CardTitle>
                        <Users className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,893</div>
                        <p className="text-xs text-muted-foreground mt-1 text-emerald-600 font-medium flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" /> +15.3% growth
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Commission Paid</CardTitle>
                        <DollarSign className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$12,450.00</div>
                        <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                    </CardContent>
                </Card>
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payouts</CardTitle>
                        <Gift className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$450.00</div>
                        <p className="text-xs text-muted-foreground mt-1">12 requests pending</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-border/60 shadow-sm">
                <CardHeader>
                    <CardTitle>Recent Referrals</CardTitle>
                    <CardDescription>Latest referral activities and their status.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Referrer</TableHead>
                                <TableHead>Referred User</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Commission</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {referrals.map((ref) => (
                                <TableRow key={ref.id}>
                                    <TableCell className="font-medium">{ref.referrer}</TableCell>
                                    <TableCell>{ref.referred}</TableCell>
                                    <TableCell className="text-muted-foreground">{ref.date}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`
                                            ${ref.status === 'completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                                            ${ref.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                                            ${ref.status === 'rejected' ? 'bg-slate-50 text-slate-500 border-slate-200' : ''}
                                        `}>
                                            {ref.status.charAt(0).toUpperCase() + ref.status.slice(1)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right font-semibold">{ref.commission}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default ReferralSystemPage;

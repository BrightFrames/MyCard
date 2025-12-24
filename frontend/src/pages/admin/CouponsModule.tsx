import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tag, Plus, Calendar, Clock, RotateCcw } from "lucide-react";

const CouponsModule = () => {
    const coupons = [
        { id: 1, code: "WELCOME20", discount: "20%", type: "Percentage", usage: "45/100", expiry: "Dec 31, 2025", status: "active" },
        { id: 2, code: "BLACKFRIDAY", discount: "50%", type: "Percentage", usage: "500/500", expiry: "Nov 30, 2024", status: "expired" },
        { id: 3, code: "FREESHIP", discount: "Free Shipping", type: "Fixed", usage: "12/50", expiry: "Jan 15, 2025", status: "active" },
        { id: 4, code: "SUMMER10", discount: "$10.00", type: "Fixed Amount", usage: "8/200", expiry: "Jun 01, 2025", status: "scheduled" },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Coupons & Discounts</h2>
                    <p className="text-muted-foreground mt-1">Manage promotional codes and special offers.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        History
                    </Button>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Coupon
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-border/60 shadow-sm bg-primary/5 border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
                        <Tag className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground mt-1">Currently redeemable</p>
                    </CardContent>
                </Card>
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Redemptions</CardTitle>
                        <Tag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,245</div>
                        <p className="text-xs text-muted-foreground mt-1 text-emerald-600">+12% this month</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-border/60 shadow-sm">
                <CardHeader>
                    <CardTitle>All Coupons</CardTitle>
                    <CardDescription>List of all created coupon codes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Code</TableHead>
                                <TableHead>Discount</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Usage Limit</TableHead>
                                <TableHead>Expiry Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {coupons.map((coupon) => (
                                <TableRow key={coupon.id}>
                                    <TableCell>
                                        <div className="font-mono font-bold bg-muted/50 px-2 py-1 rounded w-fit text-foreground">{coupon.code}</div>
                                    </TableCell>
                                    <TableCell className="font-semibold text-emerald-600">{coupon.discount}</TableCell>
                                    <TableCell>{coupon.type}</TableCell>
                                    <TableCell>{coupon.usage}</TableCell>
                                    <TableCell className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-3 h-3" /> {coupon.expiry}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`
                                            ${coupon.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                                            ${coupon.status === 'expired' ? 'bg-slate-50 text-slate-500 border-slate-200' : ''}
                                            ${coupon.status === 'scheduled' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                                        `}>
                                            {coupon.status === 'scheduled' && <Clock className="w-3 h-3 mr-1" />}
                                            {coupon.status.charAt(0).toUpperCase() + coupon.status.slice(1)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default CouponsModule;

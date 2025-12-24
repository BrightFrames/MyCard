import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search, Filter, Download } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CustomersPage = () => {
    // UI-level placeholder data
    const customers = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", plan: "Pro Plan", status: "active", joined: "Oct 24, 2024", avatarColor: "bg-blue-100 text-blue-600" },
        { id: 2, name: "Bob Smith", email: "bob.smith@company.com", plan: "Business", status: "active", joined: "Nov 12, 2024", avatarColor: "bg-emerald-100 text-emerald-600" },
        { id: 3, name: "Charlie Brown", email: "charlie@studio.design", plan: "Free", status: "inactive", joined: "Dec 01, 2024", avatarColor: "bg-amber-100 text-amber-600" },
        { id: 4, name: "Diana Prince", email: "diana@themyscira.com", plan: "Enterprise", status: "active", joined: "Dec 15, 2024", avatarColor: "bg-purple-100 text-purple-600" },
        { id: 5, name: "Evan Wright", email: "evan@tech.io", plan: "Pro Plan", status: "pending", joined: "Jan 05, 2025", avatarColor: "bg-slate-100 text-slate-600" },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Customers</h2>
                    <p className="text-muted-foreground mt-1">Manage users, their plans, and account status.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </Button>
                    <Button>Add Customer</Button>
                </div>
            </div>

            <Card className="border-border/60 shadow-sm">
                <CardHeader className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium">All Customers</CardTitle>
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search customers..." className="pl-8 w-[250px]" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="w-4 h-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Plan</TableHead>
                                    <TableHead>Joined Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {customers.map((customer) => (
                                    <TableRow key={customer.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${customer.avatarColor}`}>
                                                    {customer.name.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-sm">{customer.name}</span>
                                                    <span className="text-xs text-muted-foreground">{customer.email}</span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`
                                                ${customer.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                                                ${customer.status === 'inactive' ? 'bg-slate-50 text-slate-700 border-slate-200' : ''}
                                                ${customer.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                                            `}>
                                                {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm font-medium">{customer.plan}</TableCell>
                                        <TableCell className="text-sm text-muted-foreground">{customer.joined}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                                    <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">Suspend Account</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm" disabled>Next</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CustomersPage;

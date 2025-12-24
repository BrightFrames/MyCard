import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CreditCard, ShoppingCart, Truck, CheckCircle, Clock } from "lucide-react";

const NFCCardsPage = () => {
    // Placeholder data for Orders
    const orders = [
        { id: "#ORD-7829", customer: "Alice Johnson", product: "Matte Black PVC", quantity: 1, date: "Oct 24, 2024", status: "Delivered", amount: "$49.99" },
        { id: "#ORD-7830", customer: "Bob Smith", product: "Bamboo Wood Eco", quantity: 2, date: "Nov 12, 2024", status: "Processing", amount: "$89.98" },
        { id: "#ORD-7831", customer: "Charlie Brown", product: "Metal Gold Finish", quantity: 1, date: "Dec 01, 2024", status: "Shipped", amount: "$129.00" },
    ];

    // Placeholder data for Inventory
    const inventory = [
        { type: "PVC Cards", stock: 1250, reserved: 45, sold: 3200 },
        { type: "Metal Cards", stock: 120, reserved: 5, sold: 450 },
        { type: "Wood Cards", stock: 350, reserved: 12, sold: 890 },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">NFC Cards Management</h2>
                    <p className="text-muted-foreground mt-1">Manage card inventory, orders, and design templates.</p>
                </div>
                <Button>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Configure Products
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
                    </CardContent>
                </Card>
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending Shipments</CardTitle>
                        <Truck className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45</div>
                        <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
                    </CardContent>
                </Card>
                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                        <CreditCard className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$12,450</div>
                        <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="orders" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="orders">Recent Orders</TabsTrigger>
                    <TabsTrigger value="inventory">Inventory Status</TabsTrigger>
                    <TabsTrigger value="designs">Card Designs</TabsTrigger>
                </TabsList>

                <TabsContent value="orders">
                    <Card className="border-border/60 shadow-sm">
                        <CardHeader>
                            <CardTitle>Order History</CardTitle>
                            <CardDescription>Recent NFC card purchases and shipment status.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {orders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                <ShoppingCart className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{order.customer}</h4>
                                                <p className="text-sm text-muted-foreground">{order.product} (x{order.quantity})</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden md:block">
                                                <p className="text-sm font-medium">{order.amount}</p>
                                                <p className="text-xs text-muted-foreground">{order.date}</p>
                                            </div>
                                            <Badge variant={order.status === 'Delivered' ? 'outline' : 'secondary'} className={
                                                order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                                    order.status === 'Processing' ? 'bg-amber-50 text-amber-700' : ''
                                            }>
                                                {order.status === 'Delivered' && <CheckCircle className="w-3 h-3 mr-1" />}
                                                {order.status === 'Processing' && <Clock className="w-3 h-3 mr-1" />}
                                                {order.status === 'Shipped' && <Truck className="w-3 h-3 mr-1" />}
                                                {order.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="inventory">
                    <Card className="border-border/60 shadow-sm">
                        <CardHeader>
                            <CardTitle>Stock Levels</CardTitle>
                            <CardDescription>Current inventory for physical cards.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-4">
                                {inventory.map((item, i) => (
                                    <div key={i} className="p-4 border rounded-lg bg-card text-card-foreground">
                                        <h4 className="font-semibold text-lg">{item.type}</h4>
                                        <div className="mt-4 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">In Stock</span>
                                                <span className="font-medium">{item.stock}</span>
                                            </div>
                                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full" style={{ width: `${(item.stock / 2000) * 100}%` }} />
                                            </div>
                                            <div className="flex justify-between text-xs text-muted-foreground pt-1">
                                                <span>Reserved: {item.reserved}</span>
                                                <span>Sold: {item.sold}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="designs">
                    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg bg-muted/20">
                        <CreditCard className="w-12 h-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold">No Custom Designs Configured</h3>
                        <p className="text-muted-foreground text-center max-w-sm mt-2 mb-6">
                            Start by adding custom card designs that users can choose from during checkout.
                        </p>
                        <Button>Upload Design Template</Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default NFCCardsPage;

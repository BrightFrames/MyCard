import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Smartphone, CreditCard, Activity, ArrowUpRight, MoreHorizontal, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    BarChart,
    Bar
} from 'recharts';

const AdminDashboard = () => {
    const [isStatsOpen, setIsStatsOpen] = useState(true);
    const [isRevenueOpen, setIsRevenueOpen] = useState(true);
    const [isActivityOpen, setIsActivityOpen] = useState(true);
    const [isAlertsOpen, setIsAlertsOpen] = useState(true);

    const revenueData = [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 6000 },
        { name: 'Apr', value: 8000 },
        { name: 'May', value: 5000 },
        { name: 'Jun', value: 9000 },
        { name: 'Jul', value: 10000 },
    ];

    const stats = [
        { label: "Total Revenue", value: "$45,231", change: "+20.1%", icon: CreditCard },
        { label: "Active Users", value: "+2350", change: "+180.1%", icon: Users },
        { label: "vCards Created", value: "+12,234", change: "+19%", icon: Smartphone },
        { label: "Active Now", value: "+573", change: "+201", icon: Activity },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">Download Report</Button>
                </div>
            </div>

            <Card className="shadow-sm border-gray-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900">Performance Stats</CardTitle>
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsStatsOpen(!isStatsOpen)}
                        className="h-8 w-8 p-0"
                    >
                        {isStatsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </CardHeader>
                {isStatsOpen && (
                    <CardContent className="pt-0">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, i) => (
                                <Card key={i} className="shadow-sm border-gray-200">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium text-gray-500">
                                            {stat.label}
                                        </CardTitle>
                                        <stat.icon className="h-4 w-4 text-gray-400" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            <span className="text-emerald-600 font-medium">{stat.change}</span> from last month
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                )}
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 shadow-sm border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <CardTitle className="text-base font-semibold text-gray-900">Revenue Overview</CardTitle>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsRevenueOpen(!isRevenueOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isRevenueOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isRevenueOpen && (
                        <CardContent className="pl-2">
                            <div className="h-[350px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={revenueData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                        <XAxis
                                            dataKey="name"
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <YAxis
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `$${value}`}
                                        />
                                        <Tooltip
                                            cursor={{ fill: '#F3F4F6' }}
                                            contentStyle={{ backgroundColor: '#1F2937', color: '#fff', borderRadius: '8px', border: 'none' }}
                                        />
                                        <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    )}
                </Card>

                <Card className="col-span-3 shadow-sm border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle className="text-base font-semibold text-gray-900">Recent Activity</CardTitle>
                            <p className="text-sm text-gray-500">
                                You made 265 sales this month.
                            </p>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsActivityOpen(!isActivityOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isActivityOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isActivityOpen && (
                        <CardContent>
                            <div className="space-y-8">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="flex items-center">
                                        <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full mr-4 bg-gray-100 border border-gray-200">
                                            <span className="flex h-full w-full items-center justify-center font-semibold text-gray-900 text-xs">U{i}</span>
                                        </span>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none text-gray-900">User {i} Name</p>
                                            <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                                        </div>
                                        <div className="ml-auto font-medium text-sm text-gray-900">+$29.00</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    )}
                </Card>
            </div>

            <Card className="shadow-sm border-gray-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <div>
                        <CardTitle className="text-base font-semibold text-gray-900">System Alerts</CardTitle>
                        <p className="text-sm text-gray-500">Critical issues requiring attention</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost">View All</Button>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsAlertsOpen(!isAlertsOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isAlertsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </div>
                </CardHeader>
                {isAlertsOpen && (
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-amber-50 border border-amber-100">
                                <AlertCircle className="w-5 h-5 text-amber-600" />
                                <div>
                                    <h4 className="text-sm font-bold text-amber-800">High Server Load</h4>
                                    <p className="text-xs text-amber-700">CPU usage reached 85% at 14:00 today.</p>
                                </div>
                                <Button size="sm" variant="outline" className="ml-auto bg-white border-amber-200 text-amber-800 hover:bg-amber-100">Check</Button>
                            </div>
                        </div>
                    </CardContent>
                )}
            </Card>
        </div>
    );
};

export default AdminDashboard;

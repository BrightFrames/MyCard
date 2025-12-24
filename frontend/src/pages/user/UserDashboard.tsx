import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eye, MousePointerClick, TrendingUp, TrendingDown, MoreHorizontal, Activity, CreditCard, Smartphone, Store, Calendar, ArrowUpRight, ArrowDownRight, Globe, Share2 } from "lucide-react";
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

const UserDashboard = () => {
    // const [isPlanSectionOpen, setIsPlanSectionOpen] = useState(true); // Simplified: Always open or removed toggle for cleaner look

    const data = [
        { name: 'Mon', views: 240, clicks: 140 },
        { name: 'Tue', views: 139, clicks: 90 },
        { name: 'Wed', views: 980, clicks: 400 },
        { name: 'Thu', views: 390, clicks: 200 },
        { name: 'Fri', views: 480, clicks: 210 },
        { name: 'Sat', views: 380, clicks: 150 },
        { name: 'Sun', views: 430, clicks: 180 },
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto animate-fade-in-up pb-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Overview</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Welcome back! Here's what's happening with your links.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                        <Calendar className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400" />
                        Last 30 Days
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Page
                    </Button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Views", value: "24.5k", change: "+12.5%", trend: "up", icon: Eye, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
                    { label: "Link Clicks", value: "12.2k", change: "+4.2%", trend: "up", icon: MousePointerClick, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
                    { label: "Click Rate", value: "14.2%", change: "-2.1%", trend: "down", icon: Activity, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
                    { label: "Active Links", value: "12", change: "+3", trend: "neutral", icon: Globe, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
                ].map((stat, i) => (
                    <Card key={i} className="border-0 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-5">
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</span>
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent className="p-5 pt-0">
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                            <div className="flex items-center mt-1">
                                <span className={`flex items-center text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : stat.trend === 'down' ? 'text-rose-600 dark:text-rose-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                    {stat.trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
                                    {stat.trend === 'down' && <TrendingDown className="w-3 h-3 mr-1" />}
                                    {stat.change}
                                </span>
                                <span className="text-xs text-slate-400 ml-2">vs last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Analytics Chart */}
                <Card className="col-span-1 lg:col-span-2 border-0 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 bg-white dark:bg-slate-900">
                    <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
                        <div>
                            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Analytics Overview</CardTitle>
                            <CardDescription className="text-slate-500 dark:text-slate-400">Track your link performance and audience growth</CardDescription>
                        </div>
                        {/* Simple legend */}
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-500"></div> Views
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div> Clicks
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="views"
                                        stroke="#6366f1"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorViews)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="clicks"
                                        stroke="#34d399"
                                        strokeWidth={3}
                                        fill="none"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* My Page Links / Top Cards */}
                <Card className="col-span-1 border-0 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 bg-white dark:bg-slate-900">
                    <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">My Page Links</CardTitle>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-600">
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-50">
                            {[
                                { name: "Personal Bio", status: "Active", views: "1.2k", clicks: "450" },
                                { name: "Business Portfolio", status: "Active", views: "850", clicks: "320" },
                                { name: "Event Registration", status: "Draft", views: "0", clicks: "0" },
                                { name: "Social Hub", status: "Active", views: "2.1k", clicks: "980" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50/50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                                            <Smartphone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                                <span className="text-[10px] text-slate-400">{item.views} views</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-slate-50 dark:border-slate-800">
                            <Button variant="outline" className="w-full text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                                View All Links
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Row - More specific modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Store Highlights (Placeholder for future expansion) */}
                <Card className="border-0 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 bg-white dark:bg-slate-900">
                    <CardHeader className="p-6 pb-2">
                        <div className="flex items-center justify-between pointer">
                            <CardTitle className="text-base font-semibold text-slate-900 dark:text-white">Your Store</CardTitle>
                            <Store className="w-4 h-4 text-slate-400" />
                        </div>
                        <CardDescription>Recent orders and product views</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-4">
                        <div className="flex flex-col items-center justify-center h-32 text-center text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-dashed border-slate-200 dark:border-slate-700">
                            <p className="text-sm">No active store products.</p>
                            <Button variant="link" size="sm" className="text-indigo-600">Set up Store</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* NFC Status */}
                <Card className="border-0 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 bg-white dark:bg-slate-900">
                    <CardHeader className="p-6 pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-semibold text-slate-900 dark:text-white">NFC Devices</CardTitle>
                            <CreditCard className="w-4 h-4 text-slate-400" />
                        </div>
                        <CardDescription>Manage your physical cards</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-10 bg-gradient-to-tr from-slate-900 to-slate-700 rounded-md shadow-sm"></div>
                            <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">Matte Black Card</p>
                                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">● Active</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full text-xs">Manage Devices</Button>
                    </CardContent>
                </Card>

                {/* Subscription / Plan */}
                <Card className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-0 shadow-md">
                    <CardHeader className="p-6 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="p-1 bg-white/20 rounded">
                                <Activity className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-100">Pro Plan</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-white">Full Access</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-2">
                        <p className="text-indigo-100 text-sm mb-4">You have access to all premium themes and analytics features.</p>
                        <div className="flex gap-2">
                            <Button size="sm" className="bg-white text-indigo-700 hover:bg-indigo-50 border-0">Manage Plan</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserDashboard;

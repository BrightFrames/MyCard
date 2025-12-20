import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MousePointerClick, MessageSquare, ArrowUpRight, ArrowDownRight, MoreHorizontal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const UserDashboard = () => {
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
        <div className="space-y-8 max-w-7xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h2>
                    <p className="text-sm text-gray-500 mt-1">Overview of your digital card performance.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8">Last 7 Days</Button>
                    <Button size="sm" className="h-8 bg-indigo-600 hover:bg-indigo-700">Export Report</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Views", value: "24.5k", change: "+12%", trend: "up", icon: Eye },
                    { label: "Link Clicks", value: "12.2k", change: "+4%", trend: "up", icon: MousePointerClick },
                    { label: "Enquiries", value: "342", change: "-2%", trend: "down", icon: MessageSquare },
                    { label: "Avg. Duration", value: "1m 20s", change: "+8%", trend: "up", icon: Activity },
                ].map((stat, i) => (
                    <Card key={i} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                            <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                            <stat.icon className="h-4 w-4 text-gray-400" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <p className={`text-xs flex items-center mt-1 font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                                {stat.change}
                                <span className="text-gray-400 ml-1 font-normal">vs last week</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <Card className="col-span-2 border-gray-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between p-6">
                        <div>
                            <CardTitle className="text-base font-semibold text-gray-900">Traffic Overview</CardTitle>
                            <p className="text-sm text-gray-500">Views vs Clicks over time</p>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="views"
                                        stroke="#4f46e5"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorViews)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="clicks"
                                        stroke="#10B981"
                                        strokeWidth={2}
                                        fill="none"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Top Performing Cards List */}
                <Card className="col-span-1 border-gray-200 shadow-sm flex flex-col">
                    <CardHeader className="p-6 pb-4">
                        <CardTitle className="text-base font-semibold text-gray-900">Top Cards</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                        <div className="divide-y divide-gray-100">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-200">
                                            C{i}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Personal Brand {i}</p>
                                            <p className="text-xs text-gray-500">{1000 + i * 25} views</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-100 mt-auto">
                            <Button variant="outline" className="w-full text-xs h-8">View All Cards</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserDashboard;

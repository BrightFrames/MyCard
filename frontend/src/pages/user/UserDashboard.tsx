import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eye, MousePointerClick, MessageSquare, ArrowUpRight, ArrowDownRight, MoreHorizontal, Activity, CreditCard, Smartphone, Store, Calendar, ChevronUp, ChevronDown, TrendingUp } from "lucide-react";
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
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';

const UserDashboard = () => {
    const [isPlanSectionOpen, setIsPlanSectionOpen] = useState(true);
    const [isActivityOpen, setIsActivityOpen] = useState(true);
    const [isPlatformsOpen, setIsPlatformsOpen] = useState(true);

    const data = [
        { name: 'Mon', views: 240, clicks: 140 },
        { name: 'Tue', views: 139, clicks: 90 },
        { name: 'Wed', views: 980, clicks: 400 },
        { name: 'Thu', views: 390, clicks: 200 },
        { name: 'Fri', views: 480, clicks: 210 },
        { name: 'Sat', views: 380, clicks: 150 },
        { name: 'Sun', views: 430, clicks: 180 },
    ];

    const platformData = [
        { name: 'vCards', value: 1, color: '#4f46e5' },
    ];

    const recentActivity = [
        { action: 'Card viewed', detail: 'Personal Brand 1', time: '2 hours ago' },
        { action: 'Link clicked', detail: 'LinkedIn profile', time: '5 hours ago' },
        { action: 'New enquiry', detail: 'Contact form submission', time: '1 day ago' },
        { action: 'Card shared', detail: 'Via WhatsApp', time: '2 days ago' },
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

            {/* Plan & Account Summary Section - NEW */}
            <Card className="border-gray-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between p-4 cursor-pointer" onClick={() => setIsPlanSectionOpen(!isPlanSectionOpen)}>
                    <div>
                        <CardTitle className="text-base font-semibold text-gray-900">Account Overview</CardTitle>
                        <CardDescription className="text-sm">Your subscription and resource usage</CardDescription>
                    </div>
                    {isPlanSectionOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </CardHeader>
                {isPlanSectionOpen && (
                    <CardContent className="p-4 pt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Current Plan Card */}
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-2 mb-3">
                                    <CreditCard className="h-5 w-5 text-indigo-600" />
                                    <span className="text-xs font-semibold text-indigo-900 uppercase tracking-wide">Current Plan</span>
                                </div>
                                <h3 className="text-xl font-bold text-indigo-900 mb-1">Professional</h3>
                                <Button size="sm" variant="outline" className="w-full mt-2 bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50 text-xs h-7">
                                    Show details
                                </Button>
                            </div>

                            {/* Business Cards Count */}
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-2 mb-3">
                                    <Smartphone className="h-5 w-5 text-emerald-600" />
                                    <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Business Cards</span>
                                </div>
                                <h3 className="text-xl font-bold text-emerald-900 mb-1">1</h3>
                                <Button size="sm" variant="outline" className="w-full mt-2 bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50 text-xs h-7">
                                    Show details
                                </Button>
                            </div>

                            {/* Stores Count */}
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-2 mb-3">
                                    <Store className="h-5 w-5 text-amber-600" />
                                    <span className="text-xs font-semibold text-amber-900 uppercase tracking-wide">Stores</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900 mb-1">0</h3>
                                <Button size="sm" variant="outline" className="w-full mt-2 bg-white text-amber-700 border-amber-200 hover:bg-amber-50 text-xs h-7">
                                    Show details
                                </Button>
                            </div>

                            {/* Remaining Days */}
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calendar className="h-5 w-5 text-purple-600" />
                                    <span className="text-xs font-semibold text-purple-900 uppercase tracking-wide">Remaining Days</span>
                                </div>
                                <h3 className="text-xl font-bold text-purple-900 mb-1">466</h3>
                                <Button size="sm" variant="outline" className="w-full mt-2 bg-white text-purple-700 border-purple-200 hover:bg-purple-50 text-xs h-7">
                                    Show details
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                )}
            </Card>

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

            {/* Recent Activity Section - NEW */}
            <Card className="border-gray-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between p-4 cursor-pointer" onClick={() => setIsActivityOpen(!isActivityOpen)}>
                    <div>
                        <CardTitle className="text-base font-semibold text-gray-900">Recent Activity</CardTitle>
                        <CardDescription className="text-sm">Latest interactions with your cards</CardDescription>
                    </div>
                    {isActivityOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </CardHeader>
                {isActivityOpen && (
                    <CardContent className="p-4 pt-0">
                        <div className="space-y-3">
                            {recentActivity.map((activity, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                        <Activity className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                        <p className="text-xs text-gray-500 truncate">{activity.detail}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                )}
            </Card>

            {/* Platforms Section - NEW */}
            <Card className="border-gray-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between p-4 cursor-pointer" onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}>
                    <div>
                        <CardTitle className="text-base font-semibold text-gray-900">Platforms</CardTitle>
                        <CardDescription className="text-sm">Distribution of your digital presence</CardDescription>
                    </div>
                    {isPlatformsOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </CardHeader>
                {isPlatformsOpen && (
                    <CardContent className="p-4 pt-0">
                        <div className="flex flex-col items-center">
                            <div className="h-[200px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={platformData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={0}
                                            dataKey="value"
                                        >
                                            {platformData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip 
                                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <div className="h-3 w-3 rounded-full bg-indigo-600"></div>
                                <span className="text-sm text-gray-600">vCards</span>
                                <span className="text-sm font-semibold text-gray-900 ml-1">1</span>
                            </div>
                        </div>
                    </CardContent>
                )}
            </Card>
        </div>
    );
};

export default UserDashboard;

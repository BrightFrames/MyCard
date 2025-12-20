import { Card, CardContent } from "@/components/ui/card";
import { Eye, MousePointerClick, MessageSquare, ArrowUpRight, Zap, Target, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart
} from 'recharts';

const UserDashboard = () => {
    // Mock Data representing "Growth"
    const data = [
        { name: 'Jan', views: 400 },
        { name: 'Feb', views: 300 },
        { name: 'Mar', views: 600 },
        { name: 'Apr', views: 800 },
        { name: 'May', views: 500 },
        { name: 'Jun', views: 900 },
        { name: 'Jul', views: 1000 },
    ];

    const StatCard = ({ icon: Icon, label, value, growth, color }: any) => (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-[160px] relative overflow-hidden group hover:shadow-md transition-all">
            <div className={`p-3 rounded-xl w-fit mb-4 ${color}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
                <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{value}</h3>
            </div>
            {growth && (
                <div className="absolute top-6 right-6 flex items-center gap-1 text-sm font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                    <span>{growth}</span>
                    <ArrowUpRight className="w-3 h-3" />
                </div>
            )}
            {/* Decoration */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-slate-50 rounded-full opacity-50 group-hover:scale-110 transition-transform" />
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in pb-10">
            {/* Greeting Section */}
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Growing At Superhuman Rate 🚀</h2>
                <p className="text-slate-500 mt-1">Check your dashboard activity.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Eye}
                    label="Total Views"
                    value="31,512"
                    growth="+27%"
                    color="bg-blue-500"
                />
                <StatCard
                    icon={MousePointerClick}
                    label="Total Clicks"
                    value="23,500"
                    growth="+47%"
                    color="bg-indigo-500"
                />
                <StatCard
                    icon={Target}
                    label="Conversion Rate"
                    value="34.3%"
                    growth="+57%"
                    color="bg-purple-500"
                />
                <StatCard
                    icon={MessageSquare}
                    label="Avg Enquiries"
                    value="12,454"
                    growth="+47%"
                    color="bg-pink-500"
                />
            </div>

            {/* Main Content Area: Chart + Side Panel */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Main Graph (Takes up 2/3) */}
                <Card className="xl:col-span-2 border-none shadow-sm rounded-2xl overflow-hidden bg-white">
                    <div className="p-6 flex justify-between items-center border-b border-slate-50">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Profile Activity</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">2,430 Views</h3>
                            <p className="text-xs font-bold text-green-500 flex items-center mt-1">
                                <ArrowUpRight className="w-3 h-3 mr-1" /> $15,686.65 <span className="text-slate-400 font-normal ml-1">estimated value</span>
                            </p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-lg text-slate-500">
                            Last Year <ArrowUpRight className="w-3 h-3 ml-2 rotate-90" />
                        </Button>
                    </div>
                    <CardContent className="p-6 pt-10">
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4318FF" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#A3AED0', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#A3AED0', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1B2559', color: '#fff', borderRadius: '12px', border: 'none' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="views"
                                        stroke="#4318FF"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#colorViews)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Side Stack */}
                <div className="space-y-6">
                    {/* Upgrade/Promo Card */}
                    <div className="bg-[#4318FF] rounded-2xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[200px]">
                        <div className="relative z-10">
                            <h3 className="font-bold text-xl mb-1">Get more out of<br />MyCard Pro</h3>
                            <p className="text-white/80 text-sm mb-4">Unlock advanced analytics & remove branding.</p>
                            <Button className="bg-white text-[#4318FF] hover:bg-white/90 font-bold rounded-xl shadow-lg border-none">
                                Upgrade Plan
                            </Button>
                        </div>
                        {/* Decorative Circles */}
                        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full" />
                        <div className="absolute right-4 bottom-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
                    </div>

                    {/* Mini Stats List */}
                    <Card className="border-none shadow-sm rounded-2xl bg-white p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold">
                                SK
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>

                        <h4 className="font-bold text-slate-800 text-lg mb-2">In the last 30 days</h4>
                        <p className="text-sm text-slate-500 mb-6">
                            Yearly growth of your profile reach is increasing.
                        </p>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Organic Reach</span>
                                <span className="font-bold text-slate-800">25.2%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Direct Links</span>
                                <span className="font-bold text-slate-800">45.2%</span>
                            </div>
                            <Button variant="outline" className="w-full mt-2 rounded-xl border-indigo-100 text-indigo-600 hover:bg-indigo-50">
                                Check Data
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Bottom Section: Top Funnels mimic */}
            <Card className="border-none shadow-sm rounded-2xl bg-white overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-800">Top Performing Cards</h3>
                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">See all</Button>
                </div>
                <div className="p-0">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="p-4 pl-6 text-xs font-semibold text-slate-400 uppercase">Card Name</th>
                                <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Template</th>
                                <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Views</th>
                                <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[1, 2, 3].map(i => (
                                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 pl-6 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                                            UI
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 text-sm">Personal Brand {i}</p>
                                            <p className="text-xs text-slate-400">Created 2 days ago</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-medium text-slate-600">Modern Light</td>
                                    <td className="p-4 text-sm font-medium text-slate-600">1,20{i}</td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg border border-green-100">
                                            Active
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default UserDashboard;

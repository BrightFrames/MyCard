import { Card, CardContent } from "@/components/ui/card";
import { Users, Smartphone, MessageSquare, ArrowUpRight, DollarSign, Target, MoreHorizontal } from "lucide-react";
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
    AreaChart,
    BarChart,
    Bar
} from 'recharts';

const AdminDashboard = () => {
    // Mock Data for Admin Charts
    const revenueData = [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 6000 },
        { name: 'Apr', revenue: 8000 },
        { name: 'May', revenue: 5000 },
        { name: 'Jun', revenue: 9000 },
        { name: 'Jul', revenue: 10000 },
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
                <h2 className="text-2xl font-bold text-slate-800">Admin Overview ⚡</h2>
                <p className="text-slate-500 mt-1">Platform performance and key metrics.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Users}
                    label="Total Users"
                    value="1,245"
                    growth="+12%"
                    color="bg-blue-500"
                />
                <StatCard
                    icon={Smartphone}
                    label="Active vCards"
                    value="843"
                    growth="+8%"
                    color="bg-indigo-500"
                />
                <StatCard
                    icon={DollarSign}
                    label="Total Revenue"
                    value="$45k"
                    growth="+24%"
                    color="bg-green-500"
                />
                <StatCard
                    icon={MessageSquare}
                    label="Active Enquiries"
                    value="342"
                    growth="+5%"
                    color="bg-orange-500"
                />
            </div>

            {/* Main Graphs Area */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Revenue Graph (Takes up 2/3) */}
                <Card className="xl:col-span-2 border-none shadow-sm rounded-2xl overflow-hidden bg-white">
                    <div className="p-6 flex justify-between items-center border-b border-slate-50">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Revenue Growth</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">$45,231.00</h3>
                            <p className="text-xs font-bold text-green-500 flex items-center mt-1">
                                <ArrowUpRight className="w-3 h-3 mr-1" /> +12.5% <span className="text-slate-400 font-normal ml-1">vs last month</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="rounded-lg text-slate-500 hover:text-indigo-600 bg-slate-50">Monthly</Button>
                            <Button variant="ghost" size="sm" className="rounded-lg text-slate-500 hover:text-indigo-600">Weekly</Button>
                        </div>
                    </div>
                    <CardContent className="p-6 pt-10">
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
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
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#064E3B', color: '#fff', borderRadius: '12px', border: 'none' }}
                                        itemStyle={{ color: '#fff' }}
                                        formatter={(value) => [`$${value}`, 'Revenue']}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#10B981"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#colorRevenue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Side Stats Stack */}
                <div className="space-y-6">
                    {/* System Health Card */}
                    <div className="bg-[#4318FF] rounded-2xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[180px]">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-xl">System Status</h3>
                                    <p className="text-white/80 text-sm">All systems operational.</p>
                                </div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <p className="text-xs text-white/60 uppercase font-bold">CPU Usage</p>
                                    <p className="text-lg font-bold">12%</p>
                                    <div className="h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                                        <div className="h-full bg-green-400 w-[12%]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-white/60 uppercase font-bold">Memory</p>
                                    <p className="text-lg font-bold">45%</p>
                                    <div className="h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                                        <div className="h-full bg-yellow-400 w-[45%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Circles */}
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
                    </div>

                    {/* Pending Actions */}
                    <Card className="border-none shadow-sm rounded-2xl bg-white p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-slate-800 text-lg">Pending Actions</h4>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">U</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-700">Approve User</p>
                                        <p className="text-xs text-slate-400">John Doe requested</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="h-7 text-xs">View</Button>
                            </div>

                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">P</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-700">Verify Payment</p>
                                        <p className="text-xs text-slate-400">$29.00 Pending</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="h-7 text-xs">Check</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Bottom: Recent Activity Table */}
            <Card className="border-none shadow-sm rounded-2xl bg-white overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-800">Recent User Registrations</h3>
                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">See all users</Button>
                </div>
                <div className="p-0">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="p-4 pl-6 text-xs font-semibold text-slate-400 uppercase">User Name</th>
                                <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Email</th>
                                <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Plan</th>
                                <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[1, 2, 3, 4].map(i => (
                                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 pl-6 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
                                            U{i}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 text-sm">New User {i}</p>
                                            <p className="text-xs text-slate-400">Joined today</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-medium text-slate-600">user{i}@example.com</td>
                                    <td className="p-4 text-sm font-medium text-slate-600">
                                        <span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs">Free Plan</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg border border-green-100">
                                            Verified
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

export default AdminDashboard;

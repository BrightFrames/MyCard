import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { DashboardStats } from "@/components/dashboard/admin/DashboardStats";
import { DashboardRevenueChart } from "@/components/dashboard/admin/DashboardRevenueChart";
import { DashboardActivity } from "@/components/dashboard/admin/DashboardActivity";

const AdminDashboard = () => {
    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
                    <p className="text-muted-foreground mt-1">Overview of your business performance.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="hidden md:flex items-center text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-lg border border-border/50">
                        Today: {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <Button variant="default" className="shadow-lg shadow-primary/20">Download Report</Button>
                </div>
            </div>

            <Card className="border-border/60 shadow-card bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b border-border/40">
                    <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary" />
                        Performance Stats
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsStatsOpen(!isStatsOpen)}
                        className="h-8 w-8 p-0 hover:bg-muted"
                    >
                        {isStatsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </CardHeader>
                {isStatsOpen && (
                    <CardContent className="pt-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, i) => (
                                <Card key={i} className="group relative overflow-hidden border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                        <stat.icon className="w-16 h-16 text-primary" />
                                    </div>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                            {stat.label}
                                        </CardTitle>
                                        <div className={`p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                                            <stat.icon className="h-4 w-4" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                            <span className="flex items-center text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded font-medium">
                                                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                                                {stat.change}
                                            </span>
                                            <span className="opacity-70">from last month</span>
                                        </p>
                                    </CardContent>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                )}
            </Card>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 border-border/60 shadow-card flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                        <div>
                            <CardTitle className="text-lg font-bold text-foreground">Revenue Overview</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">Monthly revenue comparison</p>
                        </div>
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
                        <CardContent className="pl-0 pr-6 pb-6 flex-1">
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                        <XAxis
                                            dataKey="name"
                                            stroke="hsl(var(--muted-foreground))"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={10}
                                        />
                                        <YAxis
                                            stroke="hsl(var(--muted-foreground))"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `$${value}`}
                                            tickMargin={10}
                                        />
                                        <Tooltip
                                            cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }}
                                            contentStyle={{
                                                backgroundColor: 'hsl(var(--popover))',
                                                color: 'hsl(var(--popover-foreground))',
                                                borderRadius: '8px',
                                                border: '1px solid hsl(var(--border))',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                            }}
                                            itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="hsl(var(--primary))"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorRevenue)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    )}
                </Card>

                <Card className="col-span-3 border-border/60 shadow-card flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                        <div>
                            <CardTitle className="text-lg font-bold text-foreground">Recent Activity</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                                You made <span className="text-emerald-600 font-bold">265 sales</span> this month.
                            </p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                    </CardHeader>
                    {isActivityOpen && (
                        <CardContent>
                            <div className="space-y-6">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="flex items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-muted/50 transition-colors">
                                        <div className="relative">
                                            <span className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4 bg-muted border border-border group-hover:border-primary/50 transition-colors shadow-sm">
                                                <span className="flex h-full w-full items-center justify-center font-bold text-foreground text-xs bg-gradient-to-br from-muted to-background">U{i}</span>
                                            </span>
                                            <span className="absolute bottom-0 right-4 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full"></span>
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <p className="text-sm font-semibold leading-none text-foreground group-hover:text-primary transition-colors">User {i} Name</p>
                                            <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                                        </div>
                                        <div className="ml-auto font-bold text-sm text-foreground bg-primary/5 px-2 py-1 rounded-lg">+$29.00</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    )}
                </Card>
            </div>

            <Card className="border-border/60 shadow-card bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-l-amber-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-500/20 text-amber-600 rounded-lg">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <CardTitle className="text-base font-bold text-foreground">System Alerts</CardTitle>
                            <p className="text-sm text-muted-foreground">Critical issues requiring attention</p>
                        </div>
                    </div>
                </CardHeader>
                {isAlertsOpen && (
                    <CardContent>
                        <div className="space-y-3 pl-2 border-l border-border/50 ml-5 my-2">
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors">
                                <div>
                                    <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400">High Server Load</h4>
                                    <p className="text-xs text-amber-600/70 dark:text-amber-500/70">CPU usage reached 85% at 14:00 today.</p>
                                </div>
                                <Button size="sm" variant="outline" className="text-xs h-8 border-amber-500/30 text-amber-700 hover:text-amber-800 hover:bg-amber-100">Resolve</Button>
                            </div>
                        </div>
                    </CardContent>
                )}
            </Card>
        </div>
    );
};

export default AdminDashboard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';

const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 6000 },
    { name: 'Apr', value: 8000 },
    { name: 'May', value: 5000 },
    { name: 'Jun', value: 9000 },
    { name: 'Jul', value: 10000 },
];

export const DashboardRevenueChart = () => {
    return (
        <Card className="col-span-12 lg:col-span-8 rounded-2xl border-slate-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-8">
                <div>
                    <CardTitle className="text-lg font-bold text-slate-800">Revenue Overview</CardTitle>
                    <p className="text-sm text-slate-500 mt-1">Monthly performance</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full border-slate-200 text-xs font-medium h-8">
                        Last 7 months <ChevronDown className="ml-2 w-3 h-3" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0.8} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                stroke="#94a3b8"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    color: '#0f172a',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                }}
                            />
                            <Bar
                                dataKey="value"
                                fill="url(#colorBar)"
                                radius={[6, 6, 0, 0]}
                                barSize={40}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

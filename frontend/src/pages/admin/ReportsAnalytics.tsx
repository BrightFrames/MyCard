import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import { useState } from "react";

const data = [
    { name: 'Mon', views: 4000, clicks: 2400 },
    { name: 'Tue', views: 3000, clicks: 1398 },
    { name: 'Wed', views: 2000, clicks: 9800 },
    { name: 'Thu', views: 2780, clicks: 3908 },
    { name: 'Fri', views: 1890, clicks: 4800 },
    { name: 'Sat', views: 2390, clicks: 3800 },
    { name: 'Sun', views: 3490, clicks: 4300 },
];

const ReportsAnalytics = () => {
    const [isTrafficOpen, setIsTrafficOpen] = useState(true);
    const [isConversionOpen, setIsConversionOpen] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Reports & Analytics</h2>
                    <p className="text-muted-foreground mt-1">Platform-wide performance metrics.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" /> Export CSV
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle>Traffic Overview</CardTitle>
                            <CardDescription>Total views vs clicks over the last week.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsTrafficOpen(!isTrafficOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isTrafficOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isTrafficOpen && (
                        <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--foreground)' }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="clicks" stroke="#82ca9d" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                    )}
                </Card>

                <Card className="card-elevated border-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <div>
                            <CardTitle>Conversion & Growth</CardTitle>
                            <CardDescription>New user registrations vs upgrades.</CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsConversionOpen(!isConversionOpen)}
                            className="h-8 w-8 p-0"
                        >
                            {isConversionOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    {isConversionOpen && (
                        <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--foreground)' }}
                                />
                                <Legend />
                                <Bar dataKey="views" name="Registrations" fill="#8884d8" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="clicks" name="Upgrades" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default ReportsAnalytics;

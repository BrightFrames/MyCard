import { CreditCard, Users, Smartphone, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const DashboardStats = () => {
    const stats = [
        {
            label: "Total Revenue",
            value: "$45,231",
            change: "+20.1%",
            trend: "up",
            icon: CreditCard,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            label: "Active Users",
            value: "2,350",
            change: "+180.1%",
            trend: "up",
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            label: "vCards Created",
            value: "12,234",
            change: "+19%",
            trend: "up",
            icon: Smartphone,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            label: "Active Now",
            value: "573",
            change: "+201",
            trend: "up",
            icon: Activity,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
                <Card key={i} className="rounded-2xl border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between mt-4">
                            <h2 className="text-2xl font-bold bg-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                                {stat.value}
                            </h2>
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">from last month</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

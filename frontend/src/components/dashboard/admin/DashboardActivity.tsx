import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export const DashboardActivity = () => {
    const activities = [
        { id: 1, name: "Sarah Johnson", email: "sarah@example.com", amount: "+$29.00", initials: "SJ", color: "bg-blue-100 text-blue-700" },
        { id: 2, name: "Michael Chen", email: "michael@tech.co", amount: "+$49.00", initials: "MC", color: "bg-purple-100 text-purple-700" },
        { id: 3, name: "Emma Wilson", email: "emma.w@design.io", amount: "+$29.00", initials: "EW", color: "bg-pink-100 text-pink-700" },
        { id: 4, name: "James Brown", email: "j.brown@corp.com", amount: "+$99.00", initials: "JB", color: "bg-orange-100 text-orange-700" },
        { id: 5, name: "Lisa Davis", email: "lisa.d@studio.net", amount: "+$29.00", initials: "LD", color: "bg-emerald-100 text-emerald-700" },
    ];

    return (
        <Card className="col-span-12 lg:col-span-4 rounded-2xl border-slate-100 shadow-sm flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
                <div>
                    <CardTitle className="text-lg font-bold text-slate-800">Recent Activity</CardTitle>
                    <p className="text-sm text-slate-500 mt-1">Found 265 sales this month</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="space-y-6">
                    {activities.map((item) => (
                        <div key={item.id} className="flex items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors">
                            <span className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4 ${item.color} flex items-center justify-center font-bold text-xs ring-4 ring-white`}>
                                {item.initials}
                            </span>
                            <div className="space-y-1 flex-1">
                                <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.name}</p>
                                <p className="text-xs text-slate-500">{item.email}</p>
                            </div>
                            <div className="font-semibold text-sm text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                {item.amount}
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="w-full mt-6 bg-slate-50 text-slate-600 hover:bg-slate-100 border-none shadow-none rounded-xl">
                    View All Transactions
                </Button>
            </CardContent>
        </Card>
    );
};

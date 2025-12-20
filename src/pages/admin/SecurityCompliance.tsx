import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Activity } from 'lucide-react';

const SecurityCompliance = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Security & Compliance</h2>
                    <p className="text-muted-foreground mt-1">System logs and access control.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="card-elevated border-none md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="w-5 h-5" /> Recent User Activity
                        </CardTitle>
                        <CardDescription>Login history and major actions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">User</th>
                                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Action</th>
                                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">IP Address</th>
                                        <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase text-right">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <tr key={i} className="text-sm">
                                            <td className="px-4 py-3 font-medium">User #{i}</td>
                                            <td className="px-4 py-3">Logged In</td>
                                            <td className="px-4 py-3 text-muted-foreground">192.168.1.{i}</td>
                                            <td className="px-4 py-3 text-right text-muted-foreground">{i * 5} mins ago</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                <Card className="card-elevated border-none">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" /> Security Health
                        </CardTitle>
                        <CardDescription>Current system status.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Firewall Status</span>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">SSL Certificate</span>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Valid</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Admin 2FA</span>
                            <Badge variant="outline" className="text-orange-600 border-orange-200">Disabled</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SecurityCompliance;

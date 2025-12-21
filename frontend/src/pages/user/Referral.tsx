import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Referral = () => {
    const referralCode = "GOBIX-REF123";

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Referral Program</h2>
                <p className="text-sm text-gray-500 mt-1">Invite friends and earn rewards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-gray-200">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-gray-500">Total Referrals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900">0</p>
                    </CardContent>
                </Card>
                <Card className="border-gray-200">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-gray-500">Successful Signups</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900">0</p>
                    </CardContent>
                </Card>
                <Card className="border-gray-200">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-gray-500">Rewards Earned</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900">$0</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-gray-200">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                            <Gift className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <CardTitle>Your Referral Code</CardTitle>
                            <CardDescription>Share this code with your friends</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        <Input value={referralCode} readOnly className="font-mono" />
                        <Button variant="outline" size="icon">
                            <Copy className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Referral;

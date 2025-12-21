import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BusinessHours = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <Card className="card-elevated border-none">
            <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>Set your availability for visitors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b">
                    <div className="space-y-0.5">
                        <Label className="text-base">Always Open</Label>
                        <p className="text-sm text-muted-foreground">Select if you operate 24/7</p>
                    </div>
                    <Switch />
                </div>

                <div className="space-y-4">
                    {days.map(day => (
                        <div key={day} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 hover:bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-4 w-32">
                                <Switch defaultChecked={day !== 'Sunday'} />
                                <span className={day === 'Sunday' ? "text-muted-foreground" : "font-medium"}>{day}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-1">
                                <Input type="time" className="w-32" defaultValue="09:00" disabled={day === 'Sunday'} />
                                <span className="text-muted-foreground">to</span>
                                <Input type="time" className="w-32" defaultValue="18:00" disabled={day === 'Sunday'} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end pt-4">
                    <Button>Save Hours</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BusinessHours;

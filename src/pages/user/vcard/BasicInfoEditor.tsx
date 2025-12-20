import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';

const BasicInfoEditor = ({ card }: any) => {
    return (
        <Card className="card-elevated border-none">
            <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Main details displayed on your card.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Profile Photo</Label>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden border">
                                {card.data.avatarUrl ? (
                                    <img src={card.data.avatarUrl} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-xl font-bold text-muted-foreground">IMG</span>
                                )}
                            </div>
                            <Button variant="outline" size="sm">Change Photo</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Logo (Optional)</Label>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded bg-muted flex items-center justify-center overflow-hidden border">
                                <span className="text-xs font-bold text-muted-foreground">LOGO</span>
                            </div>
                            <Button variant="outline" size="sm">Upload Logo</Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input defaultValue={card.data.name} />
                    </div>
                    <div className="space-y-2">
                        <Label>Job Title</Label>
                        <Input defaultValue={card.data.title} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input defaultValue={card.data.company} />
                </div>

                <div className="space-y-2">
                    <Label>Bio / Description</Label>
                    <Textarea defaultValue={card.data.bio} rows={4} />
                </div>

                <div className="pt-2 flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BasicInfoEditor;

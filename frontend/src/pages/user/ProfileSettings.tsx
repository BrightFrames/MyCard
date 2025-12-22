import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ProfileSettings = () => {
    const handleUpdate = () => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: 'Updating profile...',
            success: 'Profile updated successfully',
            error: 'Failed to update profile',
        });
    };

    return (
        <div className="space-y-6 max-w-2xl animate-fade-in-up">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Profile Settings</h2>
                <p className="text-gray-500 mt-1">Manage your account preferences and login security.</p>
            </div>

            <Card className="border-gray-200 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Account Information</CardTitle>
                    <CardDescription>Update your login email and password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john@example.com" className="max-w-md" />
                    </div>

                    <div className="pt-4 border-t border-gray-100 space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900">Change Password</h3>
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" className="max-w-md" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" className="max-w-md" />
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button onClick={handleUpdate} className="bg-indigo-600 hover:bg-indigo-700">Update Account</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileSettings;

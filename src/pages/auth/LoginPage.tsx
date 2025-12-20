import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent, type: 'admin' | 'user') => {
        e.preventDefault();
        setLoading(true);

        // Simulate network delay
        setTimeout(() => {
            setLoading(false);

            if (type === 'admin') {
                if (username === 'admin' && password === 'admin123') {
                    toast.success("Welcome back Admin!");
                    navigate('/admin');
                } else {
                    toast.error("Invalid Admin credentials. Try 'admin' / 'admin123'");
                }
            } else {
                if (username === 'user' && password === 'user123') {
                    toast.success("Welcome back User!");
                    navigate('/dashboard');
                } else {
                    toast.error("Invalid User credentials. Try 'user' / 'user123'");
                }
            }
        }, 1000);
    };

    return (
        <div className="w-full flex justify-center">
            <Tabs defaultValue="user" className="w-[400px]" onValueChange={() => {
                setUsername("");
                setPassword("");
            }}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="user">User</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                </TabsList>

                <TabsContent value="user">
                    <Card className="card-elevated">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" />
                                User Login
                            </CardTitle>
                            <CardDescription>
                                Access your dashboard to manage your digital presence.
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={(e) => handleLogin(e, 'user')}>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="user-username">Username</Label>
                                    <Input
                                        id="user-username"
                                        type="text"
                                        placeholder="user"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="user-password">Password</Label>
                                    <Input
                                        id="user-password"
                                        type="password"
                                        placeholder="user123"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" type="submit" disabled={loading}>
                                    {loading ? "Signing in..." : "Sign In"}
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>

                <TabsContent value="admin">
                    <Card className="card-elevated">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-primary" />
                                Admin Login
                            </CardTitle>
                            <CardDescription>
                                Sign in to manage the GoBix platform.
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={(e) => handleLogin(e, 'admin')}>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="admin-username">Username</Label>
                                    <Input
                                        id="admin-username"
                                        type="text"
                                        placeholder="admin"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="admin-password">Password</Label>
                                    <Input
                                        id="admin-password"
                                        type="password"
                                        placeholder="admin123"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" type="submit" disabled={loading}>
                                    {loading ? "Signing in..." : "Sign In as Admin"}
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

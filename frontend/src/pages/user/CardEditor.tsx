
import { useState } from 'react';
import { MOCK_CARDS } from '@/lib/mock-data';
import { THEMES } from '@/lib/themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const CardEditor = () => {
    // Simulating logged in user u2
    const initialCard = MOCK_CARDS.find(c => c.userId === 'u2');
    const [formData, setFormData] = useState(initialCard?.data || {
        name: '', title: '', company: '', bio: '', email: '', phone: '', website: '', avatarUrl: ''
    });
    const [selectedTheme, setSelectedTheme] = useState(initialCard?.themeId || 'minimal');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // In a real app, this would make an API call
        toast.success("Card updated successfully!");
    };

    if (!initialCard) return <div>Data not found</div>;

    // Get active theme component
    const ActiveTheme = THEMES.find(t => t.id === selectedTheme)?.component || THEMES[0].component;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Edit Card</h2>
                <p className="text-gray-500 mt-1">Customize your digital business card.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Tabs defaultValue="details">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="details">Card Details</TabsTrigger>
                            <TabsTrigger value="design">Design & Template</TabsTrigger>
                        </TabsList>

                        <TabsContent value="details">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Personal Information</CardTitle>
                                    <CardDescription>Update your contact details and bio.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Job Title</Label>
                                            <Input id="title" name="title" value={formData.title} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="website">Website</Label>
                                        <Input id="website" name="website" value={formData.website} onChange={handleChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="avatarUrl">Profile Image URL</Label>
                                        <Input id="avatarUrl" name="avatarUrl" value={formData.avatarUrl} onChange={handleChange} />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="design">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Choose Template</CardTitle>
                                    <CardDescription>Select a style for your business card.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        {THEMES.map(theme => (
                                            <div
                                                key={theme.id}
                                                className={`cursor-pointer border-2 rounded-lg p-4 relative flex flex-col items-center justify-center gap-2 h-32 text-center transition-all ${selectedTheme === theme.id ? 'border-blue-600 ring-2 ring-blue-100 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
                                                onClick={() => setSelectedTheme(theme.id)}
                                            >
                                                <div className="text-sm font-bold">{theme.name}</div>
                                                <Badge variant="secondary" className="text-[10px]">{theme.category}</Badge>
                                                {selectedTheme === theme.id && (
                                                    <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
                                                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="flex justify-end gap-4">
                        <Button variant="outline">Discard Changes</Button>
                        <Button onClick={handleSave}>Save Changes</Button>
                    </div>
                </div>

                {/* Live Preview Sidebar */}
                <div className="hidden lg:block relative">
                    <div className="sticky top-24">
                        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center justify-between">
                            Live Preview
                            <Badge variant="outline" className="text-xs uppercase">{selectedTheme}</Badge>
                        </h3>
                        <div className="border-[8px] border-slate-900 rounded-[2.5rem] overflow-hidden bg-white h-[600px] shadow-2xl relative ring-1 ring-slate-900/50">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

                            {/* Card content */}
                            <div className="w-full h-full overflow-y-auto no-scrollbar relative z-10 selection:bg-transparent">
                                <ActiveTheme />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardEditor;

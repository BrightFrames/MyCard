
import { useState } from 'react';
import { MOCK_CARDS, MOCK_TEMPLATES } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const CardEditor = () => {
    // Simulating logged in user u2
    const initialCard = MOCK_CARDS.find(c => c.userId === 'u2');
    const [formData, setFormData] = useState(initialCard?.data || {
        name: '', title: '', company: '', bio: '', email: '', phone: '', website: '', avatarUrl: ''
    });
    const [selectedTemplate, setSelectedTemplate] = useState(initialCard?.templateId);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // In a real app, this would make an API call
        toast.success("Card updated successfully!");
    };

    if (!initialCard) return <div>Data not found</div>;

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
                                        {MOCK_TEMPLATES.map(template => (
                                            <div
                                                key={template.id}
                                                className={`cursor-pointer border-2 rounded-lg overflow-hidden relative ${selectedTemplate === template.id ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'}`}
                                                onClick={() => setSelectedTemplate(template.id as any)}
                                            >
                                                <img src={template.thumbnail} alt={template.name} className="w-full h-32 object-cover" />
                                                <div className="p-2 text-center text-sm font-medium">{template.name}</div>
                                                {selectedTemplate === template.id && (
                                                    <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
                                                        <div className="w-2 h-2 bg-white rounded-full" />
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
                <div className="hidden lg:block">
                    <div className="sticky top-24">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Live Preview</h3>
                        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 h-[600px] flex items-center justify-center shadow-inner">
                            <p className="text-gray-400 text-sm">Preview of {selectedTemplate}</p>
                            {/* Actual Card Preview Component could be embedded here later */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardEditor;

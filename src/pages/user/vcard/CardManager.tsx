import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Link as LinkIcon, Briefcase, Image as ImageIcon, Clock, Smartphone, Settings } from 'lucide-react';
import { MOCK_CARDS } from '@/lib/mock-data';
// Sub-components (Placeholders for now, will implement next)
import BasicInfoEditor from './BasicInfoEditor';
import LinksManager from './LinksManager';
import ServicesManager from './ServicesManager';
import GalleryManager from './GalleryManager';
import BusinessHours from './BusinessHours';
import ContactInfoEditor from './ContactInfoEditor';

const CardManager = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const card = MOCK_CARDS.find(c => c.id === id);

    if (!card) return <div>Card not found</div>;

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard/cards')}>
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Editing: {card.data.name}</h2>
                    <p className="text-muted-foreground text-sm">Manage all details for this card.</p>
                </div>
            </div>

            <Tabs defaultValue="basic" className="w-full bg-transparent">
                <TabsList className="w-full flex justify-start overflow-x-auto h-auto p-1 bg-card border border-border rounded-lg mb-6">
                    <TabsTrigger value="basic" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <User className="w-4 h-4" /> Basic
                    </TabsTrigger>
                    <TabsTrigger value="contact" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <Smartphone className="w-4 h-4" /> Contact
                    </TabsTrigger>
                    <TabsTrigger value="links" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <LinkIcon className="w-4 h-4" /> Links
                    </TabsTrigger>
                    <TabsTrigger value="services" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <Briefcase className="w-4 h-4" /> Services
                    </TabsTrigger>
                    <TabsTrigger value="gallery" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <ImageIcon className="w-4 h-4" /> Gallery
                    </TabsTrigger>
                    <TabsTrigger value="hours" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <Clock className="w-4 h-4" /> Hours
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-2">
                        <Settings className="w-4 h-4" /> Settings
                    </TabsTrigger>
                </TabsList>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <TabsContent value="basic">
                            <BasicInfoEditor card={card} />
                        </TabsContent>
                        <TabsContent value="contact">
                            <ContactInfoEditor card={card} />
                        </TabsContent>
                        <TabsContent value="links">
                            <LinksManager />
                        </TabsContent>
                        <TabsContent value="services">
                            <ServicesManager />
                        </TabsContent>
                        <TabsContent value="gallery">
                            <GalleryManager />
                        </TabsContent>
                        <TabsContent value="hours">
                            <BusinessHours />
                        </TabsContent>
                        <TabsContent value="settings">
                            <div className="p-4 border rounded bg-card">Settings Mock</div>
                        </TabsContent>
                    </div>

                    <div className="hidden lg:block">
                        <div className="sticky top-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold">Live Preview</h3>
                                <Button size="sm" variant="secondary" onClick={() => window.open(`/c/${card.slug}`, '_blank')}>
                                    Open New Tab
                                </Button>
                            </div>
                            {/* Mobile Frame Mock */}
                            <div className="border-[8px] border-gray-900 rounded-[3rem] overflow-hidden bg-white h-[600px] shadow-xl relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10" />
                                <iframe
                                    src={`/c/${card.slug}?preview=true`}
                                    className="w-full h-full border-0 bg-white"
                                    title="Card Preview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};

export default CardManager;

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Link as LinkIcon, Briefcase, Image as ImageIcon, Clock, Smartphone, Settings, Palette, LayoutGrid, Eye, Share2 } from 'lucide-react';
import { MOCK_CARDS } from '@/lib/mock-data';

// Sub-components
import BasicInfoEditor from './BasicInfoEditor';
import LinksManager from './LinksManager';
import ServicesManager from './ServicesManager';
import GalleryManager from './GalleryManager';
import BusinessHours from './BusinessHours';
import ContactInfoEditor from './ContactInfoEditor';
import ThemeEditor from './ThemeEditor';
import SettingsEditor from './SettingsEditor';

const CardManager = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('links'); // Default to links as it's the most common action
    const card = MOCK_CARDS.find(c => c.id === id);

    if (!card) return <div>Card not found</div>;

    const [previewTheme, setPreviewTheme] = useState(card.themeId || 'minimal');

    const sections = [
        { id: 'links', label: 'Links & Content', icon: LinkIcon, component: LinksManager },
        { id: 'appearance', label: 'Appearance', icon: Palette, component: ThemeEditor },
        { id: 'basic', label: 'Profile Details', icon: User, component: BasicInfoEditor },
        { id: 'contact', label: 'Contact Info', icon: Smartphone, component: ContactInfoEditor },
        { id: 'settings', label: 'Settings', icon: Settings, component: SettingsEditor },
    ];

    const ActiveComponent = sections.find(s => s.id === activeSection)?.component || LinksManager;

    return (
        <div className="flex h-[calc(100vh-4rem)] -m-8 bg-[#F9FAFB] text-slate-900 overflow-hidden">
            {/* Left Column: Editor Navigation */}
            <div className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20">
                <div className="h-14 flex items-center px-4 border-b border-slate-100">
                    <Button variant="ghost" size="sm" className="-ml-2 text-slate-500 hover:text-slate-900" onClick={() => navigate('/dashboard/cards')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-3 mb-6 px-2">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-lg">
                            {card.data.name.charAt(0)}
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="font-semibold text-sm truncate text-slate-900">{card.data.name}</h3>
                            <a href={`/c/${card.slug}`} target="_blank" rel="noreferrer" className="text-xs text-indigo-500 hover:underline flex items-center gap-1">
                                {card.slug} <Eye className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-1">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
                                    ? 'bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <section.icon size={18} className={activeSection === section.id ? "text-indigo-600" : "text-slate-400"} />
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-auto p-4 border-t border-slate-100">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm gap-2">
                        <Share2 className="w-4 h-4" /> Share Link
                    </Button>
                </div>
            </div>

            {/* Center Column: Active Editor */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB] relative z-10">
                {/* Local Header for the active section */}
                <div className="h-14 flex items-center justify-between px-8 border-b border-slate-200 bg-white sticky top-0 z-10">
                    <h2 className="text-lg font-semibold text-slate-800">
                        {sections.find(s => s.id === activeSection)?.label}
                    </h2>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="hidden sm:flex">Discard</Button>
                        <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">Save Changes</Button>
                    </div>
                </div>

                {/* Content Scroll Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[500px]">
                            <ActiveComponent
                                card={card}
                                currentTheme={previewTheme}
                                onThemeChange={setPreviewTheme}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Preview (Hidden on small screens, slide-over or sticky on large) */}
            <div className="hidden xl:flex w-[400px] flex-col border-l border-slate-200 bg-white z-20">
                <div className="h-14 flex items-center justify-between px-6 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live Preview</span>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <Smartphone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <LayoutGrid className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="flex-1 bg-slate-50 flex items-center justify-center p-8 overflow-hidden">
                    <div className="relative w-[300px] h-[600px] border-[8px] border-slate-900 rounded-[3rem] shadow-2xl bg-white overflow-hidden transform transition-all hover:scale-[1.02]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20" />
                        <iframe
                            src={`/c/${card.slug}?preview=true&theme=${previewTheme}`}
                            className="w-full h-full border-0"
                            title="Card Preview"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardManager;

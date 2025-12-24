import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Eye, Trash2, MoreVertical, Globe, Smartphone } from 'lucide-react';
import { MOCK_CARDS } from "@/lib/mock-data";
import { THEMES } from "@/lib/themes";
import { useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MyCards = () => {
    const navigate = useNavigate();
    const userCards = MOCK_CARDS.filter(c => c.userId === 'u2');

    return (
        <div className="space-y-8 max-w-7xl mx-auto px-4 pb-20">
            <div>
                <p className="text-sm text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-1">Overview</p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Business Cards</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Create New Card */}
                <button
                    onClick={() => navigate('/dashboard/cards/new')}
                    className="group relative flex flex-col items-center justify-center h-[500px] rounded-[2.5rem] border-2 border-dashed border-gray-300 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 cursor-pointer"
                >
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Plus className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Card</h3>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Start from scratch</p>
                </button>

                {/* Existing Cards */}
                {userCards.map((card) => {
                    // Find the theme component for this card, default to first if not found
                    const ThemeComponent = THEMES.find(t => t.id === card.themeId)?.component || THEMES[0].component;

                    return (
                        <div key={card.id} className="relative group perspective-1000">
                            {/* Phone Frame container */}
                            <div className="relative h-[500px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

                                {/* Screen Content / Theme Preview */}
                                <div className="w-full h-full bg-white overflow-hidden relative z-10 pointer-events-none">
                                    <ThemeComponent />
                                </div>

                                {/* Overlay Actions (appear on hover) */}
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col items-center justify-center gap-4">
                                    <Button
                                        onClick={() => navigate(`/dashboard/cards/${card.id}/edit`)}
                                        className="w-32 bg-white text-slate-900 hover:bg-gray-100 font-semibold rounded-full"
                                    >
                                        <Edit2 className="w-4 h-4 mr-2" /> Edit
                                    </Button>
                                    <Button
                                        onClick={() => window.open(`/c/${card.slug}`, '_blank')}
                                        variant="outline"
                                        className="w-32 border-white/30 text-white hover:bg-white/10 rounded-full"
                                    >
                                        <Eye className="w-4 h-4 mr-2" /> Preview
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="w-32 rounded-full opacity-80 hover:opacity-100"
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                                    </Button>
                                </div>
                            </div>

                            {/* Details Below Card */}
                            <div className="mt-4 flex items-start justify-between px-2">
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white truncate max-w-[150px]">{card.data.name}</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 mt-1">
                                        <Badge variant="secondary" className="px-1.5 py-0 h-5 text-[10px] font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-0">
                                            BUSINESS
                                        </Badge>
                                        <span>• {card.stats.views} views</span>
                                    </div>
                                </div>

                                {/* Three dots menu for extra actions if needed, or mobile usage */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white">
                                            <MoreVertical className="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => navigate(`/dashboard/cards/${card.id}/edit`)}>Edit</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => window.open(`/c/${card.slug}`, '_blank')}>View Public Link</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyCards;

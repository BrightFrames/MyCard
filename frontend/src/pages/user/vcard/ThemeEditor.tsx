import { useState } from 'react';
import { THEMES } from '@/lib/themes';
import { Button } from '@/components/ui/button';
import { Palette, CheckCircle, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

const ThemeEditor = ({ card, currentTheme, onThemeChange }: any) => {
    // State is now managed by parent (CardManager)

    const handleSelectTheme = (id: string) => {
        if (onThemeChange) {
            onThemeChange(id);
            toast.success(`Theme preview: ${THEMES.find(t => t.id === id)?.name}`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-blue-800">
                <Info className="shrink-0 mt-0.5" size={18} />
                <p className="text-sm">Select a template to instantly update your digital card's look and feel. Your content will automatically adapt to the new design.</p>
            </div>

            {/* Premium Section */}
            <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                    Premium Themes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {THEMES.filter(t => t.category === 'Premium').map(theme => (
                        <div
                            key={theme.id}
                            onClick={() => handleSelectTheme(theme.id)}
                            className={`group cursor-pointer rounded-2xl border-2 transition-all duration-200 overflow-hidden relative flex flex-col ${currentTheme === theme.id
                                ? 'border-indigo-600 ring-2 ring-indigo-200'
                                : 'border-slate-100 hover:border-slate-300 hover:shadow-lg'
                                }`}
                        >
                            {/* Mini Preview */}
                            <div className="h-48 bg-slate-50 relative pointer-events-none">
                                <div className="absolute inset-2 rounded-xl overflow-hidden border shadow-sm scale-90 group-hover:scale-100 transition-transform origin-top">
                                    <theme.component />
                                </div>
                            </div>

                            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                                <span className="font-semibold text-sm text-slate-900">{theme.name}</span>
                                {currentTheme === theme.id && <CheckCircle className="text-indigo-600 w-5 h-5 fill-indigo-100" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Basic Section */}
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                    Basic Themes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {THEMES.filter(t => t.category === 'Basic').map(theme => (
                        <div
                            key={theme.id}
                            onClick={() => handleSelectTheme(theme.id)}
                            className={`group cursor-pointer rounded-2xl border-2 transition-all duration-200 overflow-hidden relative flex flex-col ${currentTheme === theme.id
                                ? 'border-orange-500 ring-2 ring-orange-200'
                                : 'border-slate-100 hover:border-slate-300 hover:shadow-lg'
                                }`}
                        >
                            <div className="h-48 bg-slate-50 relative pointer-events-none">
                                <div className="absolute inset-2 rounded-xl overflow-hidden border shadow-sm scale-90 group-hover:scale-100 transition-transform origin-top">
                                    <theme.component />
                                </div>
                            </div>
                            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                                <span className="font-semibold text-sm text-slate-900">{theme.name}</span>
                                {currentTheme === theme.id && <CheckCircle className="text-orange-500 w-5 h-5 fill-orange-100" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeEditor;

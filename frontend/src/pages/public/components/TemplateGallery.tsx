import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    Instagram,
    Linkedin,
    Share2,
    ArrowRight,
    Palette,
    Plane,
    Leaf
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { THEMES as themes } from '@/lib/themes';

const TemplateGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Enhanced scale: Device enters larger (1.2) and settles to normal (1)
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -5]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.95]);

    // Text animations: Starts off-screen left, fades in AFTER device appears
    const textX = useTransform(scrollYProgress, [0, 0.3, 0.6], [-100, -100, 0]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, 1]);

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden" style={{ perspective: "1000px" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content - Animates from left after device appears */}
                    <motion.div
                        style={{
                            x: textX,
                            opacity: textOpacity,
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold mb-6">
                            <Palette size={16} />
                            <span>Library of 50+ Templates</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            From <span className="text-orange-500">Essential</span> to <span className="text-indigo-600">Extraordinary</span>.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Whether you need a simple, effective card for your business or a cutting-edge design to wow clients, we have it all.
                        </p>

                        <div className="mb-8">
                            <div className="relative">
                                <Palette className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div>
                                <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-3">Premium Styles</h4>
                                <div className="flex flex-wrap gap-2">
                                    {themes.filter(t => t.category === 'Premium' && t.name.toLowerCase().includes(searchQuery.toLowerCase())).map((theme) => {
                                        const idx = themes.indexOf(theme);
                                        return (
                                            <button
                                                key={theme.id}
                                                onClick={() => setActiveIndex(idx)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndex === idx
                                                    ? 'bg-indigo-900 text-white shadow-lg'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                    }`}
                                            >
                                                {theme.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-orange-900 uppercase tracking-widest mb-3">Basic Styles</h4>
                                <div className="flex flex-wrap gap-2">
                                    {themes.filter(t => t.category === 'Basic' && t.name.toLowerCase().includes(searchQuery.toLowerCase())).map((theme) => {
                                        const idx = themes.indexOf(theme);
                                        return (
                                            <button
                                                key={theme.id}
                                                onClick={() => setActiveIndex(idx)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndex === idx
                                                    ? 'bg-orange-500 text-white shadow-lg'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                    }`}
                                            >
                                                {theme.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Phone Simulator with 3D Scroll Animation */}
                    <motion.div
                        className="relative flex justify-center"
                        style={{
                            rotateX: rotate,
                            scale: scale,
                        }}
                    >
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-800 ring-1 ring-slate-900/50"
                        >
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center gap-2">
                                <div className="w-16 h-1 bg-zinc-800 rounded-full"></div>
                                <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative z-10 select-none">
                                {(() => {
                                    const ActiveTheme = themes[activeIndex].component;
                                    return <ActiveTheme />;
                                })()}
                            </div>

                            {/* Reflection Gloss */}
                            <div className="absolute inset-0 rounded-[3rem] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] z-30"></div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TemplateGallery;

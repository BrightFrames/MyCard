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

// --- Theme Renderers ---

const ThemePhotographer = () => (
    <div className="h-full bg-[#E8DCC4] text-slate-900 font-serif overflow-hidden relative">
        {/* Banner */}
        <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472396961693-142e6e594e91?q=80&w=600)' }}>
            <div className="absolute inset-0 bg-orange-900/20"></div>
        </div>

        <div className="px-6 relative -mt-12 text-center">
            {/* Profile */}
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-[#E8DCC4] shadow-lg overflow-hidden mb-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" alt="Profile" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-bold mb-1">James Carter</h3>
            <p className="text-orange-800 text-sm font-bold uppercase tracking-wide mb-4">Professional Photographer</p>

            <p className="text-xs text-slate-700 mb-6 italic">
                "Capturing life's moments one shutter at a time. Enthusiastic about travel and portraits."
            </p>

            <div className="flex justify-center gap-6 mb-8 text-orange-900">
                <div className="p-3 bg-orange-900/10 rounded-full"><Instagram size={20} /></div>
                <div className="p-3 bg-orange-900/10 rounded-full"><Share2 size={20} /></div>
                <div className="p-3 bg-orange-900/10 rounded-full"><Phone size={20} /></div>
            </div>

            <div className="bg-[#D4C5A9] p-4 rounded-xl text-left flex items-start gap-3 shadow-inner">
                <MapPin size={20} className="text-orange-900 mt-1 shrink-0" />
                <div>
                    <div className="font-bold text-xs text-orange-900 uppercase mb-1">Location</div>
                    <div className="text-sm text-slate-800 opacity-80">456 Bloom Avenue, Springfield, IL 62704</div>
                </div>
            </div>
        </div>
    </div>
);

const ThemeTravel = () => (
    <div className="h-full bg-sky-50 text-slate-900 font-sans overflow-hidden">
        {/* Banner */}
        <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600)' }}>
            <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-bold">EN ▼</div>
        </div>

        <div className="px-6 relative -mt-10">
            <div className="flex items-end gap-4 mb-4">
                <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                    <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200" alt="Travel" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-lg font-black uppercase text-sky-900 leading-tight">Mewese<br />Travels & Tours</h3>
                    <p className="text-sky-600 text-xs font-bold">Wander Beyond Maps</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Dive into thoughtfully curated journeys from hidden gems to bucket-list adventures for curious travelers.
            </p>

            <div className="flex justify-between gap-2 mb-8 px-2">
                {[Plane, Instagram, Phone, Mail].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center hover:bg-sky-300 transition-colors shadow-sm">
                        <Icon size={20} />
                    </div>
                ))}
            </div>

            <div className="bg-sky-200/50 p-4 rounded-2xl border border-sky-200">
                <div className="flex items-center gap-2 mb-2 text-sky-800">
                    <MapPin size={16} fill="currentColor" />
                    <span className="font-bold text-sm">Location</span>
                </div>
                <div className="text-sm text-sky-900">
                    Naxal, Kathmandu, Nepal<br />
                    Lake side, street no. 18, Pokhara
                </div>
            </div>
        </div>
    </div>
);

const ThemeSpa = () => (
    <div className="h-full bg-emerald-50/50 text-slate-800 font-serif overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>

        <div className="h-44 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600)' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/90 to-transparent"></div>
        </div>

        <div className="relative -mt-20 text-center px-6">
            <div className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-sm overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200" alt="Spa" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-serif text-emerald-900 mb-1">Spa Studio 9</h3>
            <p className="text-emerald-600 text-xs uppercase tracking-wider font-sans mb-4">Harmony Haven Spa</p>

            <p className="text-xs text-slate-500 mb-6 max-w-[24ch] mx-auto">
                Experience ultimate relaxation and personalized care, where harmony meets your wealth.
            </p>

            <div className="flex justify-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center"><Phone size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center"><Mail size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center"><Leaf size={18} /></div>
            </div>

            <div className="bg-emerald-100/40 p-4 rounded-xl text-left border border-emerald-100">
                <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-emerald-700" />
                    <span className="font-bold text-xs text-emerald-800 uppercase">Location</span>
                </div>
                <div className="text-xs text-emerald-900 opacity-80 pl-6">
                    123 MCG, Melbourne, Australia
                </div>
            </div>
        </div>
    </div>
);

const ThemeMinimal = () => (
    <div className="h-full bg-white text-slate-900 font-sans p-6 text-center">
        <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full mb-6 border-2 border-slate-900 flex items-center justify-center">
            <span className="text-3xl font-bold">JD</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-1">John Doe</h3>
        <p className="text-slate-500 font-medium mb-8">Architect & Designer</p>

        <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:border-black transition-colors">
                <Mail size={18} />
                <span className="text-sm">john@archistudio.com</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:border-black transition-colors">
                <Globe size={18} />
                <span className="text-sm">www.archistudio.com</span>
            </div>
        </div>

        <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full border-slate-300"><Instagram size={18} /></Button>
            <Button variant="outline" size="icon" className="rounded-full border-slate-300"><Linkedin size={18} /></Button>
        </div>
    </div>
);

const ThemeGlass = () => (
    <div className="h-full bg-slate-900 text-white font-sans p-6 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-spin opacity-10 blur-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-40"></div>

        <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 h-full flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 mb-4 shadow-lg shadow-purple-500/20"></div>
            <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
            <p className="text-blue-200 text-sm mb-6">Full Stack Developer</p>

            <div className="w-full grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center hover:bg-white/10 transition">
                    <div className="font-bold text-lg">15+</div>
                    <div className="text-[10px] text-slate-400">Projects</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center hover:bg-white/10 transition">
                    <div className="font-bold text-lg">5yr</div>
                    <div className="text-[10px] text-slate-400">Exp</div>
                </div>
            </div>

            <Button className="w-full mb-3 bg-blue-600 hover:bg-blue-500 border-none">GitHub Profile</Button>
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Download CV</Button>
        </div>
    </div>
);

const ThemeNeon = () => (
    <div className="h-full bg-black text-cyan-400 font-mono p-6 border-4 border-black">
        <div className="h-full border border-cyan-500/50 p-4 relative shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-zinc-900 border border-cyan-500 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Cyber<span className="text-cyan-400">Dev</span></h3>
                    <p className="text-xs text-pink-500">System Architect</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="p-3 border border-zinc-800 bg-zinc-900/50 flex justify-between items-center group cursor-pointer hover:border-cyan-500 transition-colors">
                    <span className="text-sm text-zinc-300 group-hover:text-cyan-400">ENCRYPTED_EMAIL</span>
                    <ArrowRight size={14} className="text-zinc-600 group-hover:text-cyan-400" />
                </div>
                <div className="p-3 border border-zinc-800 bg-zinc-900/50 flex justify-between items-center group cursor-pointer hover:border-pink-500 transition-colors">
                    <span className="text-sm text-zinc-300 group-hover:text-pink-500">SECURE_CHAT</span>
                    <ArrowRight size={14} className="text-zinc-600 group-hover:text-pink-500" />
                </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="inline-block px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500">V.20.77</div>
            </div>
        </div>
    </div>
);

const themes = [
    { id: 'photographer', name: 'Photographer', component: ThemePhotographer, category: 'Basic' },
    { id: 'travel', name: 'Travel & Tours', component: ThemeTravel, category: 'Basic' },
    { id: 'spa', name: 'Spa & Wellness', component: ThemeSpa, category: 'Basic' },
    { id: 'glass', name: 'Glassmorphism', component: ThemeGlass, category: 'Premium' },
    { id: 'minimal', name: 'Modern Minimal', component: ThemeMinimal, category: 'Premium' },
    { id: 'neon', name: 'Neon Dark', component: ThemeNeon, category: 'Premium' },
];

const TemplateGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
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

                        <div className="space-y-6 mb-10">
                            <div>
                                <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-3">Premium Styles</h4>
                                <div className="flex flex-wrap gap-2">
                                    {themes.filter(t => t.category === 'Premium').map((theme) => {
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
                                    {themes.filter(t => t.category === 'Basic').map((theme) => {
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

import React from 'react';
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
    Plane,
    Leaf,
    Dumbbell,
    Facebook,
    Twitter,
    Briefcase,
    Folder,
    Stethoscope,
    Scale,
    Gavel,
    Send,
    Settings,
    User
} from 'lucide-react';

// --- Theme Components ---

export const ThemePhotographer = () => (
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

export const ThemeTravel = () => (
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

export const ThemeSpa = () => (
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

export const ThemeMinimal = () => (
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

export const ThemeGlass = () => (
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

export const ThemeNeon = () => (
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

export const ThemeFloral = () => (
    <div className="h-full bg-[#FFFBF7] text-[#5A4A42] font-serif p-0 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFE4E1] rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute top-40 -left-10 w-24 h-24 bg-[#E6E6FA] rounded-full opacity-50 blur-2xl"></div>

        <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1522335789203-abd65232121c?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFBF7]"></div>
        </div>

        <div className="relative -mt-16 text-center px-6">
            <div className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif italic mb-1 text-[#4A3B32]">Isabella Rossi</h3>
            <p className="text-[#8B7355] text-sm uppercase tracking-widest mb-6 font-sans">Wellness Director</p>

            <div className="flex justify-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#FFE4E1] text-[#4A3B32] flex items-center justify-center shadow-sm"><Phone size={16} /></div>
                <div className="w-10 h-10 rounded-full bg-[#E6E6FA] text-[#4A3B32] flex items-center justify-center shadow-sm"><Mail size={16} /></div>
                <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#4A3B32] flex items-center justify-center shadow-sm"><MapPin size={16} /></div>
            </div>

            <Button className="w-full rounded-xl bg-[#4A3B32] text-[#FFFBF7] hover:bg-[#6D5E56] font-sans">Book Appointment</Button>
        </div>
    </div>
);

// --- NEW PREMIUM THEMES (Based on User Feedback) ---

export const ThemeElegant = () => (
    <div className="h-full bg-[#F5F2EA] text-[#2C2C2C] font-serif relative overflow-hidden">
        {/* Top Banner with Arc */}
        <div className="h-44 bg-[url('https://images.unsplash.com/photo-1544365558-359d997cc504?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-[#000000]/20"></div>
            {/* Language dropdown mock */}
            <div className="absolute top-4 right-4 bg-white/30 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-sans font-bold">EN ▼</div>
        </div>
        <div className="w-full -mt-10 bg-[#F5F2EA] rounded-t-[3rem] relative z-10 pt-10 px-6 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full border-[3px] border-white shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 mt-4">Mahalakshmi</h3>
            <p className="text-[#A0886C] text-xs font-bold uppercase tracking-widest mb-4 font-sans">Yoga Master</p>

            <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                "Mahalakshmi is a skilled yoga master, blending ancient wisdom with modern techniques to inspire balance and peace."
            </p>

            <div className="flex justify-center gap-6 mb-8 text-[#A0886C]">
                <Instagram size={24} strokeWidth={1.5} />
                <Plane size={24} strokeWidth={1.5} />
                <Mail size={24} strokeWidth={1.5} />
                <Phone size={24} strokeWidth={1.5} />
            </div>

            <div className="bg-[#E6DCCF] rounded-2xl p-4 text-left flex items-start gap-4 mb-20">
                <div className="bg-[#A0886C] rounded-full p-2 text-white mt-1">
                    <MapPin size={16} />
                </div>
                <div>
                    <div className="font-bold text-xs uppercase text-[#5a4a3a] mb-1 font-sans">Address</div>
                    <div className="text-sm text-[#5a4a3a]">1234 Elm Street Springfield, IL 62704 United States.</div>
                </div>
            </div>
        </div>

        {/* Bottom Sticky Links */}
        <div className="absolute bottom-0 w-full bg-[#E6DCCF]/80 backdrop-blur-md pb-4 pt-3 px-6 rounded-t-3xl flex justify-between items-center text-[#5a4a3a]">
            <div className="p-3 bg-[#E6DCCF] rounded-full border border-[#d6c7b5]"><Instagram size={18} /></div>
            <div className="p-3 bg-[#E6DCCF] rounded-full border border-[#d6c7b5]"><Plane size={18} /></div>
            <div className="p-3 bg-[#E6DCCF] rounded-full border border-[#d6c7b5]"><Share2 size={18} /></div>
            <div className="p-3 bg-[#E6DCCF] rounded-full border border-[#d6c7b5]"><Globe size={18} /></div>
        </div>
    </div>
);

export const ThemeMedical = () => (
    <div className="h-full bg-slate-50 text-slate-900 font-sans relative overflow-hidden flex flex-col">
        {/* Blue Header Curve */}
        <div className="h-32 bg-blue-500 rounded-b-[50%] relative shrink-0">
            {/* Stethoscope Background Pattern (Simulated with icons) */}
            <Stethoscope className="absolute top-4 left-4 text-blue-400/30 w-16 h-16 -rotate-12" />
            <Stethoscope className="absolute bottom-8 right-12 text-blue-400/30 w-12 h-12 rotate-45" />
        </div>

        <div className="flex-1 px-6 -mt-16 flex flex-col items-center text-center overflow-y-auto no-scrollbar">
            <div className="w-28 h-28 rounded-full p-1 bg-white shadow-lg mb-4">
                <div className="w-full h-full rounded-full border-4 border-blue-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 leading-tight">Ethany Davis</h3>
            <p className="text-blue-500 font-bold text-xs mb-3">General Practitioner</p>

            <p className="text-xs text-slate-500 leading-relaxed mb-6 max-w-[25ch]">
                She is a compassionate general practitioner who offers personalized, holistic care for all ages.
            </p>

            <div className="flex justify-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition shadow-sm"><Send size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition shadow-sm"><Phone size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition shadow-sm"><Mail size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition shadow-sm"><Instagram size={18} /></div>
            </div>

            <div className="w-full bg-blue-50/50 rounded-2xl p-4 text-left border border-blue-100 mt-auto mb-4">
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                        <MapPin size={16} />
                    </div>
                    <div>
                        <div className="font-bold text-xs text-slate-900 mb-1">Location</div>
                        <div className="text-xs text-slate-500 leading-tight">100 George St, The Rocks NSW 2000, Australia</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Menu Bar Simulation */}
        <div className="h-14 bg-blue-500 mx-4 mb-4 rounded-2xl flex items-center justify-around text-blue-100 shrink-0 shadow-lg shadow-blue-200">
            <div className="p-2 bg-white rounded-full text-blue-600"><Briefcase size={16} /></div>
            <Send size={18} />
            <Globe size={18} />
            <Share2 size={18} />
        </div>
    </div>
);

export const ThemeLegal = () => (
    <div className="h-full bg-[#E8E8E8] text-slate-900 font-serif relative overflow-hidden flex flex-col">
        {/* Top Image Area */}
        <div className="h-44 relative">
            <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Legal Office" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-90"></div>

            <div className="absolute -bottom-8 left-6 flex items-end gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-[#C0A080] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" alt="Lawyer" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        <div className="flex-1 px-6 pt-10 overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">Devon Stark</h3>
                    <p className="text-[#8B5E3C] font-bold text-xs uppercase tracking-widest font-sans">Software Architect</p>
                </div>
                <div className="p-2 bg-black text-white rounded-lg"><div className="font-mono text-xs">&lt;/&gt;</div></div>
            </div>

            <p className="text-xs text-slate-600 mb-6 italic border-l-2 border-[#8B5E3C] pl-3 py-1">
                "Passion for clean code, scalable architecture, and building the future of the web."
            </p>

            <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#8B5E3C] transition"><Phone size={16} /></div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#8B5E3C] transition"><Mail size={16} /></div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#8B5E3C] transition"><Instagram size={16} /></div>
            </div>

            <div className="bg-black text-white p-4 rounded-xl relative overflow-hidden">
                <div className="relative z-10 flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-full"><MapPin size={16} /></div>
                    <div>
                        <div className="font-bold text-xs text-[#C0A080] mb-1">Office Location</div>
                        <div className="text-xs text-gray-300">221B Baker St, London<br />NW1 6XE, UK</div>
                    </div>
                </div>
                <Gavel className="absolute -bottom-2 -right-2 w-16 h-16 text-white/5 rotate-[-15deg]" />
            </div>
        </div>

        {/* Bottom Nav */}
        <div className="p-4 bg-gradient-to-t from-[#D0C0B0] to-transparent flex justify-center gap-6 text-[#5A4A3A]">
            <div className="p-2 border border-[#8B5E3C]/30 rounded-full"><Briefcase size={16} /></div>
            <div className="p-2 border border-[#8B5E3C]/30 rounded-full"><Send size={16} /></div>
            <div className="p-2 border border-[#8B5E3C]/30 rounded-full"><Globe size={16} /></div>
            <div className="p-2 border border-[#8B5E3C]/30 rounded-full"><Share2 size={16} /></div>
        </div>
    </div>
);

export const ThemeMakeup = () => (
    <div className="h-full bg-pink-50 text-slate-900 font-sans relative overflow-hidden flex flex-col">
        {/* Background Flowers (Simulated) */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-40 h-40 bg-rose-200/50 rounded-full blur-3xl -z-10"></div>

        <div className="h-40 relative">
            <img src="https://images.unsplash.com/photo-1487412947132-26620f36c840?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Makeup" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-50"></div>
        </div>

        <div className="px-6 -mt-12 flex flex-col items-center text-center flex-1 overflow-y-auto no-scrollbar">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3">
                <img src="https://images.unsplash.com/photo-1518556636735-43ea7b380dc8?w=200&h=200&fit=crop" alt="Artist" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-serif text-rose-950 mb-1" style={{ fontFamily: 'cursive' }}>Meg Lanning</h3>
            <p className="text-rose-600 text-xs font-bold uppercase tracking-wider mb-4">Professional Makeup Artist</p>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Unleashing your beauty with expert makeup artistry specializing in bridal, editorial, and special events.
            </p>

            <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center hover:bg-rose-200 transition"><Phone size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center hover:bg-rose-200 transition"><Instagram size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center hover:bg-rose-200 transition"><Mail size={18} /></div>
            </div>

            <div className="w-full bg-white/60 p-4 rounded-xl border border-pink-100 text-left mb-4">
                <div className="flex items-center gap-2 mb-1">
                    <Share2 size={14} className="text-rose-400" />
                    <span className="text-xs font-bold text-rose-900">Social Links</span>
                </div>
                <div className="flex justify-between mt-2 px-2">
                    <Instagram size={20} className="text-rose-400" />
                    <Facebook size={20} className="text-rose-400" />
                    <Twitter size={20} className="text-rose-400" />
                </div>
            </div>
        </div>
    </div>
);

export const ThemeInterior = () => (
    <div className="h-full bg-teal-900 text-white font-sans relative overflow-hidden flex flex-col">
        <div className="h-2/5 relative">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Interior" />
            <div className="absolute -bottom-1 w-full h-12 bg-teal-900 rounded-t-[2rem]"></div>
        </div>

        <div className="flex-1 px-6 -mt-16 text-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl border-4 border-teal-900 shadow-xl overflow-hidden mb-4 rotate-3 hover:rotate-0 transition-transform">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" alt="Designer" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-bold mb-1">Maria Smith</h3>
            <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-4">Professional Interior Designer</p>

            <p className="text-xs text-teal-100/80 mb-8 leading-relaxed max-w-[30ch]">
                Maria Smith is an experienced interior designer, specializing in creating functional and stylish spaces.
            </p>

            <div className="flex gap-3 w-full justify-center mb-8">
                <div className="p-3 bg-teal-800 rounded-xl hover:bg-teal-700 transition cursor-pointer"><Instagram size={20} /></div>
                <div className="p-3 bg-teal-800 rounded-xl hover:bg-teal-700 transition cursor-pointer"><Phone size={20} /></div>
                <div className="p-3 bg-teal-800 rounded-xl hover:bg-teal-700 transition cursor-pointer"><Mail size={20} /></div>
                <div className="p-3 bg-teal-800 rounded-xl hover:bg-teal-700 transition cursor-pointer"><Globe size={20} /></div>
            </div>
        </div>

        {/* Bottom Curved Nav */}
        <div className="h-16 bg-teal-800/50 backdrop-blur rounded-t-3xl mx-2 flex items-center justify-around px-4">
            <Briefcase className="text-teal-200" size={20} />
            <Send className="text-teal-200" size={20} />
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center -mt-8 border-4 border-teal-900 shadow-lg">
                <Share2 className="text-white" size={18} />
            </div>
            <Settings className="text-teal-200" size={20} /> {/* Assuming Settings needs import or use generic */}
            <User className="text-teal-200" size={20} />     {/* Assuming User needs import or use generic */}
        </div>
    </div>
);

export const ThemeArchitect = () => (
    <div className="h-full bg-[#EADDCD] text-[#5A4A3A] font-serif relative overflow-hidden flex flex-col">
        {/* Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(30deg, #5A4A3A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="h-44 relative">
            <img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover sepia-[0.3]" alt="Architecture" />
            <div className="absolute inset-0 bg-[#EADDCD]/60"></div>
        </div>

        <div className="flex-1 px-6 -mt-16 relative">
            <div className="bg-[#DBC8B0] p-6 rounded-t-full rounded-b-[10rem] text-center shadow-xl border border-white/20">
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#5A4A3A]/20 overflow-hidden mb-4">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" alt="Corporate" className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className="text-xl font-bold mb-1">Sarah James</h3>
                <p className="text-[#8B5E3C] text-[10px] font-bold uppercase tracking-widest mb-2 font-sans">Business Consultant</p>
                <p className="text-[10px] text-[#5A4A3A]/80 leading-tight">
                    Driving corporate strategy and operational excellence for global enterprises.
                </p>
            </div>

            <div className="flex justify-center gap-6 mt-6">
                <div className="w-12 h-12 rounded-full border border-[#8B5E3C] flex items-center justify-center text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-[#EADDCD] transition"><Instagram size={18} /></div>
                <div className="w-12 h-12 rounded-full border border-[#8B5E3C] flex items-center justify-center text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-[#EADDCD] transition"><Phone size={18} /></div>
                <div className="w-12 h-12 rounded-full border border-[#8B5E3C] flex items-center justify-center text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-[#EADDCD] transition"><Send size={18} /></div>
            </div>

            <div className="mt-8 bg-[#DBC8B0]/50 p-4 rounded-xl flex gap-3 border border-[#8B5E3C]/10">
                <div className="mt-1"><MapPin size={16} className="text-[#8B5E3C]" /></div>
                <div>
                    <div className="font-bold text-xs uppercase text-[#5A4A3A]">Address</div>
                    <div className="text-xs text-[#5A4A3A]/70">1234 Elm Street Springfield, IL 62704 United States.</div>
                </div>
            </div>
        </div>
    </div>
);

export const ThemeIndustrial = () => (
    <div className="h-full bg-white text-slate-900 font-sans relative">
        <div className="h-52 bg-slate-900 relative clip-path-slant">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale" alt="Gym" />
            <div className="absolute top-4 right-4 bg-white/20 text-white text-[10px] px-2 py-1 font-bold">EN ▼</div>
        </div>

        <div className="px-6 relative -mt-16">
            <div className="flex items-end gap-0">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden z-10 bg-black">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover grayscale" />
                </div>
            </div>

            <div className="mt-4 border-b border-black pb-4 mb-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Jamie Brooks</h3>
                <p className="text-sm font-bold uppercase mt-1">Lead Business Coach</p>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                Passionate and certified gym coach dedicated to helping clients achieve their fitness goals through discipline.
            </p>

            <div className="flex gap-4 mb-6 pb-6 border-b border-dashed border-slate-300">
                <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"><Facebook size={18} /></div>
                <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"><Instagram size={18} /></div>
                <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"><Phone size={18} /></div>
                <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"><Mail size={18} /></div>
            </div>

            <div className="border border-slate-900 p-4 relative">
                <div className="absolute -top-3 left-3 bg-white px-2 font-bold text-xs uppercase flex items-center gap-2">
                    <Dumbbell size={14} /> Address
                </div>
                <div className="text-sm font-bold text-slate-700 mt-2">
                    Silver Gym, Street 45,<br />New York, NY
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 w-full bg-slate-900 text-white p-4">
            <div className="flex justify-between items-center px-2">
                <div className="font-black italic text-xl">SOCIAL LINKS</div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Instagram size={14} /></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Globe size={14} /></div>
                </div>
            </div>
        </div>
    </div>
);

export const ThemeMonochrome = () => (
    <div className="h-full bg-white text-slate-900 font-sans overflow-hidden flex flex-col items-center pt-12 px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* Header Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
            <Button size="sm" variant="ghost" className="h-8 rounded-full text-xs font-bold gap-1 hover:bg-slate-100">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Subscribe
            </Button>
        </div>
        <div className="absolute top-4 left-4">
            {/* Home Icon generic */}
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
                <Globe size={14} />
            </div>
        </div>

        {/* Profile */}
        <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 border border-slate-200 bg-white">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full text-white flex items-center justify-center border-2 border-white text-[10px]">✨</div>
        </div>

        <h3 className="text-2xl font-bold mb-1 tracking-tight">Jono Santoso</h3>
        <p className="text-xs text-slate-500 text-center max-w-[280px] leading-relaxed mb-6">
            Hi call me Jono. I'm a digital creator that constantly exploring new frontiers in the digital landscape.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-8">
            <Mail size={20} className="hover:scale-110 transition-transform cursor-pointer" />
            <Linkedin size={20} className="hover:scale-110 transition-transform cursor-pointer" />
            <div className="w-5 h-5 bg-black text-white flex items-center justify-center rounded-[4px] text-[10px] font-bold hover:scale-110 transition-transform cursor-pointer">X</div>
            <Instagram size={20} className="hover:scale-110 transition-transform cursor-pointer" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-6">
            <div className="bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl transition-all cursor-pointer group relative overflow-hidden">
                <ArrowRight size={16} className="absolute top-4 right-4 text-slate-400 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                <div className="mb-8 text-slate-400 group-hover:text-slate-900 transition-colors"><Briefcase size={20} /></div> {/* Replaced missing Briefcase with a div if needed, but imported Lucide icons are safe to assume if I add import. Waiting for import step. */}
                <div className="font-bold text-sm leading-tight">My<br />Personal<br />Website</div>
            </div>
            <div className="bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl transition-all cursor-pointer group relative overflow-hidden">
                <ArrowRight size={16} className="absolute top-4 right-4 text-slate-400 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                <div className="mb-8 text-slate-400 group-hover:text-slate-900 transition-colors"><Folder size={20} /></div>
                <div className="font-bold text-sm leading-tight">My<br />Portfolio</div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-sm space-y-3 mb-6">
            <div className="border border-slate-200 rounded-2xl p-4 flex items-center justify-between bg-white hover:border-black transition-colors cursor-pointer group">
                <div>
                    <div className="font-bold text-sm">Get Them</div>
                    <div className="text-[10px] text-slate-500">New e-book out!</div>
                </div>
                <Button size="sm" className="rounded-full bg-black text-white hover:bg-slate-800 h-8 px-4 text-xs">Buy Now</Button>
            </div>

            <Button variant="outline" className="w-full rounded-xl h-12 border-slate-200 font-bold hover:bg-slate-50 justify-between px-4 group">
                <span>Sign-up for my newsletter</span>
                <Mail size={16} className="text-slate-400 group-hover:text-black transition-colors" />
            </Button>
        </div>

        {/* Support */}
        <div className="w-full max-w-sm text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Support</div>
            <Button className="w-full rounded-xl h-12 bg-black text-white hover:bg-slate-800 font-bold shadow-lg shadow-slate-200 gap-2">
                Buy me a coffee ☕
            </Button>
        </div>
    </div>
);

export const THEMES = [
    // Premium Styles
    { id: 'glassmorphism', name: 'Glassmorphism', component: ThemeGlass, category: 'Premium' },
    { id: 'modern-minimal', name: 'Modern Minimal', component: ThemeMinimal, category: 'Premium' },
    { id: 'neon-dark', name: 'Neon Dark', component: ThemeNeon, category: 'Premium' },
    { id: 'developer-dark', name: 'Developer Dark', component: ThemeLegal, category: 'Premium' }, // Using Legal as base for Dark
    { id: 'elegant-luxury', name: 'Elegant Luxury', component: ThemeElegant, category: 'Premium' },
    { id: 'business-coach', name: 'Business Coach', component: ThemeIndustrial, category: 'Premium' },
    { id: 'digital-creator', name: 'Digital Creator', component: ThemeMonochrome, category: 'Premium' },

    // Basic Styles
    { id: 'photographer', name: 'Photographer', component: ThemePhotographer, category: 'Basic' },
    { id: 'travel', name: 'Travel & Tours', component: ThemeTravel, category: 'Basic' },
    { id: 'spa', name: 'Spa & Wellness', component: ThemeSpa, category: 'Basic' },
    { id: 'corporate-pro', name: 'Corporate Pro', component: ThemeArchitect, category: 'Basic' },
    { id: 'creative-studio', name: 'Creative Studio', component: ThemeMakeup, category: 'Basic' }
];

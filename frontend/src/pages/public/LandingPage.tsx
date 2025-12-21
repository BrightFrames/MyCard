import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Zap,
    Menu,
    X,
    Check,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    Smartphone,
    BarChart3,
    Globe,
    QrCode,
    ShieldCheck
} from 'lucide-react';
import { useState } from 'react';
import TemplateGallery from './components/TemplateGallery';

const LandingPage = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">

            {/* Floating Navbar */}
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div className="w-full max-w-4xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl py-3 px-6 transition-all duration-300">
                    <div className="flex justify-between items-center h-10">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                                <span className="font-bold text-lg font-[Satisfy]">M</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">MyCard</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {['Features', 'How it works', 'Pricing'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
                                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button onClick={() => navigate('/login')} className="hidden md:block text-sm font-semibold text-white hover:text-indigo-300 transition-colors">Login</button>
                            <Button onClick={() => navigate('/register')} className="bg-white text-black hover:bg-slate-200 font-bold rounded-full px-6 h-9 transition-all text-xs sm:text-sm">Sign Up Free</Button>

                            {/* Mobile Toggle */}
                            <div className="md:hidden ml-2 text-white">
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5">
                        <button onClick={() => scrollToSection('features')} className="text-left font-bold text-slate-900">Feature</button>
                        <button onClick={() => scrollToSection('how-it-works')} className="text-left font-bold text-slate-900">How It Work</button>
                        <button onClick={() => scrollToSection('personas')} className="text-left font-bold text-slate-900">Personas</button>
                        <button onClick={() => scrollToSection('pricing')} className="text-left font-bold text-slate-900">Pricing</button>
                        <button onClick={() => scrollToSection('contact')} className="text-left font-bold text-slate-900">Contact Us</button>
                        <hr />
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" onClick={() => navigate('/login')} className="w-full justify-center font-bold">Login</Button>
                            <Button onClick={() => navigate('/register')} className="w-full justify-center bg-black text-white font-bold">Sign Up</Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden px-4">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none fade-in">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1] drop-shadow-2xl">
                        One link to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-[Satisfy] pr-2">rule</span> them all.
                    </h1>

                    <p className="text-xl lg:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        Join 25M+ creators using MyCard for their link in bio. <br className="hidden md:block" />
                        One link to help you share everything you create, curate and sell.
                    </p>

                    {/* Claim Link Input */}
                    <div className="max-w-md mx-auto relative group animate-slide-up">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative flex items-center bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/10">
                            <span className="pl-4 pr-1 text-slate-400 font-medium select-none text-lg">my.card/</span>
                            <input
                                type="text"
                                placeholder="yourname"
                                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-600 font-bold text-lg h-12"
                            />
                            <Button className="bg-white text-black hover:bg-slate-200 font-bold rounded-xl h-12 px-8 shadow-lg transition-all hover:scale-105">
                                Claim My Link
                            </Button>
                        </div>
                    </div>

                    {/* Floating Cards Visuals (Desktop) */}
                    <div className="hidden lg:block absolute top-[15%] left-10 w-[220px] animate-float">
                        <div className="glass-card p-4 transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 border-white/5 bg-white/5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-white"><Instagram size={20} /></div>
                                <div>
                                    <div className="font-bold text-white text-sm">@sourabh</div>
                                    <div className="text-[10px] text-slate-400">Instagram Creator</div>
                                </div>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full mb-2"></div>
                            <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute top-[20%] right-10 w-[220px] animate-float-delayed">
                        <div className="glass-card p-4 transform rotate-[6deg] hover:rotate-0 transition-all duration-500 border-white/5 bg-white/5">
                            <div className="relative aspect-video bg-indigo-900/50 rounded-lg mb-3 overflow-hidden border border-white/10">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"><Youtube size={20} className="text-white" /></div>
                                </div>
                            </div>
                            <div className="font-bold text-white text-sm">Latest Video</div>
                            <div className="text-[10px] text-slate-400">Check out my new vlog!</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unmatchable Features Title */}
            <section className="py-24 relative z-10 text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
                    Why Create With Us?
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                    Everything you are. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">In one simple link.</span>
                </h2>
            </section>

            {/* Features List (Bento Grid) */}
            <section id="features" className="pb-32 relative px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Smartphone, title: 'Contactless Sharing', desc: 'Share via NFC, QR Code, or a simple link.', colSpan: 'md:col-span-1' },
                            { icon: BarChart3, title: 'Advanced Analytics', desc: 'Track views, clicks, and engagement.', colSpan: 'md:col-span-2' },
                            { icon: Globe, title: 'Custom Domain', desc: 'Connect your own domain for a fully branded experience.', colSpan: 'md:col-span-1' },
                            { icon: Zap, title: 'Instant Updates', desc: 'Update your details anytime.', colSpan: 'md:col-span-1' },
                            { icon: ShieldCheck, title: 'Bank-Grade Security', desc: 'Your data is encrypted and secure.', colSpan: 'md:col-span-1' }
                        ].map((feature, i) => (
                            <div key={i} className={`glass-card p-8 border border-white/10 hover:border-indigo-500/50 group ${feature.colSpan || ''}`}>
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Template Showcase */}
            <TemplateGallery />

            {/* Pricing Section */}
            <section id="pricing" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Simple, transparent pricing</h2>
                        <p className="text-lg text-slate-400">Start for free, upgrade when you need to power up.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="glass-card p-8 border border-white/10 hover:border-indigo-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                            <div className="text-4xl font-bold text-white mb-1">$0</div>
                            <p className="text-slate-500 mb-6">Forever free</p>
                            <Button variant="outline" className="w-full rounded-full mb-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">Get Started</Button>
                            <ul className="space-y-4 text-sm text-slate-400">
                                {['1 Digital Card', 'Basic Profile Info', 'QR Code', 'Standard Theme'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-green-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pro Tier (Popular) */}
                        <div className="p-8 rounded-3xl border border-indigo-500/50 bg-indigo-900/10 backdrop-blur-xl relative shadow-2xl z-10">
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                            <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-slate-400">/year</span></div>
                            <p className="text-indigo-200 mb-6">For professionals</p>
                            <Button className="w-full rounded-full mb-8 bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-lg shadow-indigo-900/50">Upgrade to Pro</Button>
                            <ul className="space-y-4 text-sm text-slate-300">
                                {['5 Digital Cards', 'Full Analytics Suite', 'Custom Domain Support', 'Remove Branding', 'Priority Support', 'NFC Write Support'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-indigo-400 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Business Tier */}
                        <div className="glass-card p-8 border border-white/10 hover:border-indigo-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">Business</h3>
                            <div className="text-4xl font-bold text-white mb-1">$99<span className="text-lg font-normal text-slate-500">/year</span></div>
                            <p className="text-slate-500 mb-6">For teams & agencies</p>
                            <Button variant="outline" className="w-full rounded-full mb-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">Contact Sales</Button>
                            <ul className="space-y-4 text-sm text-slate-400">
                                {['Unlimited Cards', 'Team Management', 'Bulk Creation', 'API Access', 'Dedicated Account Manager'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-green-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white fill-current" />
                                </div>
                                <span className="text-xl font-bold">MyCard</span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                The future of networking is digital. Sustainable, sharable, and smart.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Templates</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Company</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
                        © 2024 MyCard Inc. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;

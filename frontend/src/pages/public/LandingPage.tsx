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
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md transition-all duration-300 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                <span className="font-bold text-xl">M</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900">MyCard</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-10">
                            <button onClick={() => scrollToSection('features')} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">Feature</button>
                            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">How It Work</button>
                            <button onClick={() => scrollToSection('personas')} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">Personas</button>
                            <button onClick={() => scrollToSection('pricing')} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">Pricing</button>
                            <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">Contact Us</button>
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-6">
                            <button onClick={() => navigate('/login')} className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">Login</button>
                            <Button onClick={() => navigate('/register')} className="bg-black hover:bg-slate-800 text-white font-bold rounded-full px-8 h-10 transition-all">Sign Up</Button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900">
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
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
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Don’t just <span className="text-indigo-600 font-[Satisfy]">share</span> a link <br />
                        start a relationship
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                        MyCard lets you turn social media traffic into high-quality leads <br className="hidden md:block" />
                        — with built-in forms, analytics, and CRM
                    </p>

                    {/* Claim Link Input */}
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center bg-white rounded-lg p-1.5 shadow-xl border border-slate-200">
                            <div className="pl-4 pr-2 text-slate-500 font-medium select-none">lea.link/</div>
                            <input
                                type="text"
                                placeholder="yourname"
                                className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-300 font-semibold h-10"
                            />
                            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-md h-10 px-6 shadow-md transition-all hover:shadow-lg">
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* Floating Cards Visuals (Desktop) */}
                    <div className="hidden lg:block absolute top-[20%] left-0 w-[200px] xl:w-[240px] animate-fade-in-up delay-300">
                        {/* Left Card Group */}
                        <div className="relative transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
                            <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100">
                                <div className="relative aspect-[4/5] bg-orange-100 rounded-xl overflow-hidden mb-3">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 left-2 flex gap-1">
                                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white"><img src="/tiktok-icon.svg" className="w-3 h-3 invert" alt="tiktok" /></div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-sm">City Skyline</h3>
                                <p className="text-[10px] text-slate-500 mb-2">Helping you find home</p>
                                <div className="flex gap-1 mb-2">
                                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Instagram size={12} /></div>
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Twitter size={12} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute top-[20%] right-0 w-[200px] xl:w-[240px] animate-fade-in-up delay-500">
                        {/* Right Card Group */}
                        <div className="relative transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
                            <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100">
                                <div className="relative aspect-[4/5] bg-purple-100 rounded-xl overflow-hidden mb-3">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-400 to-pink-600 flex items-center justify-center text-white"><Instagram size={12} /></div>
                                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white"><Linkedin size={12} /></div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 rounded-xl text-white -mt-10 relative z-10 mx-1 shadow-lg">
                                    <h3 className="font-bold text-sm">City Skyline</h3>
                                    <p className="text-[10px] text-indigo-200 mb-2">Find perfect home</p>
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-1.5 flex items-center gap-2">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600"><Zap size={10} fill="currentColor" /></div>
                                        <div className="text-[10px] leading-tight">
                                            <div className="font-bold">New!</div>
                                            <div className="opacity-80">Sessame</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unmatchable Features Title */}
            <section className="py-20 bg-white text-center pb-0">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
                    Unmatchable features <br />
                    <span className="font-[Satisfy] text-indigo-600 lowercase transform -rotate-2 inline-block">free, forever</span>
                </h2>
            </section>

            {/* Features List */}
            <section id="features" className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Smartphone, title: 'Contactless Sharing', desc: 'Share via NFC, QR Code, or a simple link. No app required for receivers.' },
                            { icon: BarChart3, title: 'Advanced Analytics', desc: 'Track views, clicks, and engagement to understand your networking performance.' },
                            { icon: Globe, title: 'Custom Domain', desc: 'Connect your own domain (e.g., yourname.com) for a fully branded experience.' },
                            { icon: QrCode, title: 'Smart QR Codes', desc: 'Download high-res QR codes for your physical marketing materials.' },
                            { icon: ShieldCheck, title: 'Bank-Grade Security', desc: 'Your data is encrypted and secure. Control visibility with password protection.' },
                            { icon: Zap, title: 'Instant Updates', desc: 'Update your details anytime. No need to reprint physical cards ever again.' }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Template Showcase */}
            <TemplateGallery />

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
                        <p className="text-lg text-slate-600">Start for free, upgrade when you need to power up.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
                            <div className="text-4xl font-bold text-slate-900 mb-1">$0</div>
                            <p className="text-slate-500 mb-6">Forever free</p>
                            <Button variant="outline" className="w-full rounded-full mb-8">Get Started</Button>
                            <ul className="space-y-4 text-sm text-slate-600">
                                {['1 Digital Card', 'Basic Profile Info', 'QR Code', 'Standard Theme'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-green-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pro Tier (Popular) */}
                        <div className="p-8 rounded-3xl border-2 border-indigo-600 bg-slate-900 text-white relative shadow-2xl transform scale-105 z-10">
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-bold mb-2">Pro</h3>
                            <div className="text-4xl font-bold mb-1">$29<span className="text-lg font-normal text-slate-400">/year</span></div>
                            <p className="text-slate-400 mb-6">For professionals</p>
                            <Button className="w-full rounded-full mb-8 bg-indigo-500 hover:bg-indigo-400 text-white border-none shadow-lg shadow-indigo-900/50">Upgrade to Pro</Button>
                            <ul className="space-y-4 text-sm text-slate-300">
                                {['5 Digital Cards', 'Full Analytics Suite', 'Custom Domain Support', 'Remove Branding', 'Priority Support', 'NFC Write Support'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-indigo-400 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Business Tier */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Business</h3>
                            <div className="text-4xl font-bold text-slate-900 mb-1">$99<span className="text-lg font-normal text-slate-500">/year</span></div>
                            <p className="text-slate-500 mb-6">For teams & agencies</p>
                            <Button variant="outline" className="w-full rounded-full mb-8">Contact Sales</Button>
                            <ul className="space-y-4 text-sm text-slate-600">
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
            <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-indigo-400 fill-current" />
                                </div>
                                <span className="text-xl font-bold">MyCard</span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                The future of networking is digital. Sustainable, sharable, and smart.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Templates</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                        © 2024 Leadrr Inc. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;

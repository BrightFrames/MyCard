import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Check,
    Smartphone,
    Share2,
    BarChart3,
    Globe,
    QrCode,
    Zap,
    ArrowRight,
    Menu,
    X,
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
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                <Zap className="w-5 h-5 fill-current" />
                            </div>
                            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">MyCard</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</button>
                            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</button>
                            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</button>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <Button variant="ghost" onClick={() => navigate('/login')} className="font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50">Log in</Button>
                            <Button onClick={() => navigate('/login')} className="bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-xl shadow-slate-200 hover:shadow-2xl transition-all rounded-full px-6">Get Started</Button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
                        <button onClick={() => scrollToSection('features')} className="text-left py-2 font-medium text-slate-600">Features</button>
                        <button onClick={() => scrollToSection('pricing')} className="text-left py-2 font-medium text-slate-600">Pricing</button>
                        <hr />
                        <Button variant="outline" onClick={() => navigate('/login')} className="w-full justify-center">Log in</Button>
                        <Button onClick={() => navigate('/login')} className="w-full justify-center bg-indigo-600">Get Started</Button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 animate-fade-in">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                New: NFC Support Available
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                The Last Business Card <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">You'll Ever Need.</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Share your contact details, social links, and portfolio with a single tap. Professional, sustainable, and always up to date.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button onClick={() => navigate('/login')} className="h-12 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5">
                                    Create Your Card
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" className="h-12 px-8 rounded-full border-slate-200 text-slate-700 font-semibold text-lg hover:bg-slate-50 transition-all">
                                    View Demo
                                </Button>
                            </div>
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-400 grayscale opacity-70">
                                {/* Mock Logos */}
                                <div className="font-bold text-xl">ACME Corp</div>
                                <div className="font-bold text-xl">Stripe</div>
                                <div className="font-bold text-xl">Uber</div>
                                <div className="font-bold text-xl">Notion</div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        {/* Hero Visual */}
                        <div className="relative mx-auto lg:ml-auto w-full max-w-[340px] perspective-1000 group">
                            {/* Floating Elements (Decor) */}
                            <div className="absolute -left-12 top-20 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -right-8 bottom-32 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>

                            <div className="relative transform transition-all duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 preserve-3d">
                                {/* Phone Frame */}
                                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-800 ring-1 ring-slate-900/50 h-[680px]">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center gap-2">
                                        <div className="w-16 h-1 bg-zinc-800 rounded-full"></div>
                                        <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
                                    </div>

                                    {/* Screen Content - Glassmorphism Theme */}
                                    <div className="w-full h-full bg-slate-950 rounded-[2.2rem] overflow-hidden relative text-white">
                                        {/* Animated Background */}
                                        <div className="absolute inset-0">
                                            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#4f46e5_360deg)] animate-[spin_4s_linear_infinite] opacity-30"></div>
                                            <div className="absolute inset-[2px] bg-slate-950 rounded-[2.2rem]"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col p-6 backdrop-blur-sm">
                                            <div className="mt-12 flex justify-between items-start mb-8">
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-lg shadow-indigo-500/20">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                                                        alt="Profile"
                                                        className="w-full h-full rounded-[14px] object-cover border-2 border-slate-900/50"
                                                    />
                                                </div>
                                                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                    <span className="text-[10px] font-bold tracking-wider text-indigo-300 uppercase">Pro Member</span>
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-2">Alex Morgan</h2>
                                                <p className="text-indigo-300 font-medium">Senior Product Designer</p>
                                                <p className="text-slate-400 text-sm mt-2">Crafting digital experiences that humanize technology.</p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 mb-8">
                                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors cursor-pointer group/stat">
                                                    <div className="text-2xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">128</div>
                                                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Projects</div>
                                                </div>
                                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors cursor-pointer group/stat">
                                                    <div className="text-2xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">4.9</div>
                                                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Rating</div>
                                                </div>
                                            </div>

                                            <div className="space-y-3 mt-auto mb-6">
                                                <Button className="w-full bg-white text-slate-900 hover:bg-indigo-50 font-bold h-12 rounded-xl shadow-lg shadow-indigo-900/20 transition-all hover:scale-[1.02]">
                                                    Book Consultation
                                                </Button>
                                                <div className="flex gap-3">
                                                    <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10 hover:text-white h-12 rounded-xl bg-white/5">
                                                        Portfolio
                                                    </Button>
                                                    <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10 hover:text-white h-12 rounded-xl bg-white/5">
                                                        Contact
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glass Reflection */}
                                    <div className="absolute inset-0 rounded-[3rem] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] z-30 ring-1 ring-white/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Showcase */}
            <TemplateGallery />

            {/* Features Section */}
            <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Everything you need to grow your network</h2>
                        <p className="text-lg text-slate-600">Built for professionals who want to stand out. Manage your digital identity with ease.</p>
                    </div>

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

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
                        <p className="text-lg text-slate-600">Start for free, upgrade when you need to power up.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 transition-colors">
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
                        <div className="p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 transition-colors">
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
                        © 2024 MyCard Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

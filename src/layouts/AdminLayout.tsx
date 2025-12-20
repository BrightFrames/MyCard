import { Outlet, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Smartphone,
    CreditCard,
    MessageSquare,
    FileText,
    HardDrive,
    Globe,
    MonitorSmartphone,
    BarChart3,
    LifeBuoy,
    ShieldCheck,
    Settings,
    LogOut,
    Zap,
    Search,
    Bell,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const AdminLayout = () => {
    const navItems = [
        { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
        { to: "/admin/users", icon: Users, label: "User Management" },
        { to: "/admin/vcards", icon: Smartphone, label: "vCards Control" },
        { to: "/admin/plans", icon: CreditCard, label: "Plans & Pricing" },
        { to: "/admin/payments", icon: CreditCard, label: "Payments" }, // Reusing CreditCard for now
        { to: "/admin/enquiries", icon: MessageSquare, label: "Enquiries" },
        { to: "/admin/content", icon: FileText, label: "Content & Features" },
        { to: "/admin/media", icon: HardDrive, label: "Media & Storage" },
        { to: "/admin/domains", icon: Globe, label: "Domains & Branding" },
        { to: "/admin/pwa", icon: MonitorSmartphone, label: "PWA System" },
        { to: "/admin/reports", icon: BarChart3, label: "Reports & Analytics" },
        { to: "/admin/support", icon: LifeBuoy, label: "Support Tickets" },
        { to: "/admin/security", icon: ShieldCheck, label: "Security Logs" },
        { to: "/admin/settings", icon: Settings, label: "Global Settings" },
    ];

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar - Blue Theme matching reference */}
            <aside className="w-[280px] bg-[#4318FF] text-white hidden md:flex flex-col rounded-r-3xl my-4 ml-4 shadow-xl overflow-hidden relative">

                <div className="p-8 pb-4">
                    <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" fill="currentColor" />
                        </div>
                        GoBix Admin
                    </h1>
                </div>

                <div className="px-6 mb-6">
                    <div className="h-[1px] bg-white/20 w-full" />
                </div>

                <ScrollArea className="flex-1 px-4">
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-white/10 text-white shadow-inner font-bold'
                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                    }`
                                }
                            >
                                <item.icon size={18} />
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </ScrollArea>

                <div className="p-4 mt-auto">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
                    >
                        <LogOut size={20} className="mr-2" />
                        Admin Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden h-screen bg-transparent">
                {/* Top Header */}
                <header className="h-20 px-8 flex items-center justify-between bg-transparent shrink-0">
                    <div className="w-full max-w-sm relative hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search users, cards..."
                            className="pl-10 bg-white border-transparent shadow-sm rounded-full h-11 focus-visible:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-white rounded-full shadow-sm bg-white border-transparent h-11 w-11 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </Button>
                        <div className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                            <span className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                                AD
                            </span>
                            <div className="hidden md:block text-left mr-2">
                                <p className="text-xs font-bold text-slate-700">Super Admin</p>
                                <p className="text-[10px] text-muted-foreground">Full Access</p>
                            </div>
                            <ChevronDown className="w-4 h-4 text-muted-foreground mr-2" />
                        </div>
                    </div>
                </header>

                {/* Content Scrollable Area */}
                <div className="flex-1 overflow-auto p-8 pt-2">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

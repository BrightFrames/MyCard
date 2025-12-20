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
    Search,
    Bell,
    Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const AdminLayout = () => {
    const navItems = [
        {
            title: "Overview", items: [
                { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
                { to: "/admin/reports", icon: BarChart3, label: "Analytics" },
            ]
        },
        {
            title: "Management", items: [
                { to: "/admin/users", icon: Users, label: "Users" },
                { to: "/admin/vcards", icon: Smartphone, label: "vCards" },
                { to: "/admin/plans", icon: Layers, label: "Plans" },
                { to: "/admin/payments", icon: CreditCard, label: "Finance" },
                { to: "/admin/enquiries", icon: MessageSquare, label: "Enquiries" },
            ]
        },
        {
            title: "System", items: [
                { to: "/admin/content", icon: FileText, label: "Content" },
                { to: "/admin/media", icon: HardDrive, label: "Storage" },
                { to: "/admin/domains", icon: Globe, label: "Domains" },
                { to: "/admin/pwa", icon: MonitorSmartphone, label: "PWA" },
                { to: "/admin/security", icon: ShieldCheck, label: "Security" },
                { to: "/admin/settings", icon: Settings, label: "Settings" },
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-gray-50/50 font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col flex-shrink-0">
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <div className="flex items-center gap-3 font-bold text-lg text-white">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">G</span>
                        </div>
                        GoBix Admin
                    </div>
                </div>

                <ScrollArea className="flex-1 py-4">
                    <nav className="space-y-6 px-4">
                        {navItems.map((group, idx) => (
                            <div key={idx}>
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">{group.title}</h4>
                                <div className="space-y-1">
                                    {group.items.map((item) => (
                                        <NavLink
                                            key={item.to}
                                            to={item.to}
                                            end={item.end}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                                }`
                                            }
                                        >
                                            <item.icon size={18} />
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </ScrollArea>

                <div className="p-4 border-t border-slate-800 bg-slate-900">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800"
                    >
                        <LogOut size={18} className="mr-2" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Header */}
                <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-20">
                    <div className="w-full max-w-sm relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Global Search..."
                            className="pl-9 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 transition-all h-9 text-sm w-full"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            System Stable
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Avatar className="h-8 w-8 border border-gray-200 cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8 bg-gray-50">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

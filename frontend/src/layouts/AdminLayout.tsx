import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
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
    Layers,
    Menu,
    X,
    Palette,
    Ticket,
    ShoppingBag,
    Receipt,
    Languages,
    Megaphone,
    LayoutTemplate,
    Puzzle,
    Gift,
    BookOpen,
    Users2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const AdminLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        {
            title: "Menu", items: [
                { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
                { to: "/admin/themes", icon: Palette, label: "Themes" },
                { to: "/admin/plans", icon: Layers, label: "Plans" },
                { to: "/admin/customers", icon: Users2, label: "Customers" },
                { to: "/admin/domains", icon: Globe, label: "Custom Domains" },
                { to: "/admin/nfc-cards", icon: Smartphone, label: "NFC Cards" },
                { to: "/admin/referrals", icon: Gift, label: "Referral System" },
                { to: "/admin/plugins", icon: Puzzle, label: "Plugins" },
                { to: "/admin/payments", icon: CreditCard, label: "Payment Methods" },
                { to: "/admin/coupons", icon: Ticket, label: "Coupons" },
                { to: "/admin/web-templates", icon: LayoutTemplate, label: "Web Templates" },
                { to: "/admin/blogs", icon: BookOpen, label: "Blogs" },
                { to: "/admin/users", icon: Users, label: "Users" },
                { to: "/admin/iap", icon: ShoppingBag, label: "In App Purchases" },
                { to: "/admin/transactions", icon: Receipt, label: "Transactions" },
                { to: "/admin/translations", icon: Languages, label: "Translations" },
                { to: "/admin/marketing", icon: Megaphone, label: "Marketing" },
                { to: "/admin/notifications", icon: Bell, label: "Web Notifications" },
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-background font-sans text-foreground relative">
            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 bg-sidebar border-r border-sidebar-border flex-col z-50
                fixed md:static inset-y-0 left-0
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                md:flex
            `}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-sidebar-border bg-sidebar">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-sidebar-primary-foreground">
                        <div className="w-8 h-8 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg flex items-center justify-center">
                            <span className="font-bold">A</span>
                        </div>
                        <span className="text-sidebar-foreground">Admin</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-sidebar-foreground hover:bg-sidebar-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="flex-1 overflow-hidden flex flex-col bg-sidebar">
                    <ScrollArea className="flex-1 py-4">
                        <nav className="space-y-6 px-4">
                            {navItems.map((group, idx) => (
                                <div key={idx}>
                                    <h4 className="text-xs font-bold text-sidebar-foreground/60 uppercase tracking-widest mb-3 px-2">{group.title}</h4>
                                    <div className="space-y-1">
                                        {group.items.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                end={item.end}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                                        ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                                                        : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
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
                </div>

                <div className="p-4 border-t border-sidebar-border bg-sidebar">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                    >
                        <LogOut size={18} className="mr-2" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative bg-background">
                {/* Header */}
                <header className="h-16 px-4 md:px-8 flex items-center justify-between bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-border sticky top-0 z-20">
                    <div className="flex items-center gap-3 flex-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-foreground/70"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                        <div className="w-full max-w-sm relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                                placeholder="Global Search..."
                                className="pl-9 bg-muted/50 border-input focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all h-9 text-sm w-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-semibold border border-emerald-500/20">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            System Stable
                        </div>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Avatar className="h-8 w-8 border border-border cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8 bg-muted/20">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

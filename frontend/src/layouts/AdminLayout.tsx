import { Outlet, NavLink } from 'react-router-dom';
import { ModeToggle } from "@/components/mode-toggle";
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
    Users2,
    Mail,
    Coins,
    Database,
    Eraser,
    RefreshCw,
    UserCog
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
                { to: "/admin/email-templates", icon: Mail, label: "Email Templates" },
                { to: "/admin/settings", icon: Settings, label: "Settings" },
                { to: "/admin/currencies", icon: Coins, label: "Currencies" },
                { to: "/admin/backups", icon: Database, label: "Backups" },
                { to: "/admin/clear-cache", icon: Eraser, label: "Clear Cache" },
                { to: "/admin/updates", icon: RefreshCw, label: "Software Update" },
                { to: "/admin/account", icon: UserCog, label: "My Account" },
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-background font-sans text-foreground relative overflow-hidden">
            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-72 bg-sidebar border-r border-sidebar-border flex-col z-50
                fixed md:static inset-y-0 left-0
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
                md:flex
            `}>
                <div className="h-20 flex items-center justify-between px-8 border-b border-sidebar-border bg-sidebar/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-sidebar-foreground">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <span>MyCard</span>
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
                    <ScrollArea className="flex-1 py-6">
                        <nav className="space-y-8 px-6">
                            {navItems.map((group, idx) => (
                                <div key={idx}>
                                    <h4 className="text-xs font-bold text-sidebar-foreground/50 uppercase tracking-widest mb-4 px-3">{group.title}</h4>
                                    <div className="space-y-1.5">
                                        {group.items.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                end={item.end}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${isActive
                                                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 translate-x-1'
                                                        : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:translate-x-1'
                                                    }`
                                                }
                                            >
                                                <item.icon size={18} className="transition-transform group-hover:scale-110" />
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </ScrollArea>
                </div>

                <div className="p-6 border-t border-sidebar-border bg-sidebar/50 backdrop-blur-sm">
                    <Button
                        variant="outline"
                        className="w-full justify-start text-sidebar-foreground/70 border-sidebar-border hover:text-destructive hover:border-destructive/30 hover:bg-destructive/5 transition-all"
                    >
                        <LogOut size={18} className="mr-2" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative bg-background transition-all">
                {/* Visual Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                {/* Header */}
                <header className="h-20 px-4 md:px-8 flex items-center justify-between bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-border/40 sticky top-0 z-20 shadow-sm transition-all">
                    <div className="flex items-center gap-4 flex-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-foreground/70"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </Button>
                        <div className="w-full max-w-md relative hidden md:block group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 transition-colors group-focus-within:text-primary" />
                            <Input
                                placeholder="Search everything..."
                                className="pl-11 bg-muted/30 border-transparent hover:bg-muted/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all h-11 rounded-2xl text-sm w-full shadow-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
                        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-bold border border-emerald-500/20 shadow-sm">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            Live System
                        </div>
                        <div className="h-8 w-[1px] bg-border/60 mx-1 hidden sm:block" />
                        <ModeToggle />
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-background animate-ping" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-background" />
                        </Button>
                        <Avatar className="h-10 w-10 border-2 border-background shadow-md cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">AD</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8 relative scroll-smooth">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

import { Outlet, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Smartphone,
    MessageSquare,
    Settings,
    LogOut,
    UserCircle,
    CreditCard,
    Search,
    Bell,
    ChevronDown,
    Zap,
    Menu,
    X,
    Store,
    ShoppingCart,
    Package,
    Gift,
    Image,
    Receipt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const DashboardLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
        { to: "/dashboard/cards", icon: Smartphone, label: "Business Cards" },
        { to: "/dashboard/stores", icon: Store, label: "Stores" },
        { to: "/dashboard/order-nfc", icon: ShoppingCart, label: "Order NFC Card" },
        { to: "/dashboard/orders", icon: Package, label: "My Orders" },
        { to: "/dashboard/nfc-cards", icon: CreditCard, label: "My NFC Cards" },
        { to: "/dashboard/referral", icon: Gift, label: "Referral" },
        { to: "/dashboard/media", icon: Image, label: "Media" },
        { to: "/dashboard/plans", icon: Receipt, label: "Plans" },
        { to: "/dashboard/transactions", icon: CreditCard, label: "Transactions" },
        { to: "/dashboard/enquiries", icon: MessageSquare, label: "Enquiries" },
        { to: "/dashboard/profile", icon: UserCircle, label: "My Account" },
    ];

    return (
        <div className="flex h-screen bg-background font-sans text-foreground">
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - Modern Semantic Theme */}
            <aside className={`
                w-64 bg-sidebar border-r border-sidebar-border flex-col z-50
                fixed md:static inset-y-0 left-0
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                md:flex
            `}>
                {/* Mobile Close Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 md:hidden p-2 hover:bg-sidebar-accent rounded-lg"
                >
                    <X className="w-5 h-5 text-sidebar-foreground" />
                </button>

                <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-sidebar-primary-foreground">
                        <div className="w-8 h-8 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-sidebar-foreground">GoBix</span>
                    </div>
                </div>

                <div className="p-4 flex-1 overflow-hidden flex flex-col">
                    <div className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2 px-2">Menu</div>
                    <ScrollArea className="flex-1 -mr-3 pr-3">
                        <nav className="space-y-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.end}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                                            : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <item.icon size={18} className={isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground"} />
                                            {item.label}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </nav>
                    </ScrollArea>
                </div>

                {/* Bottom Section */}
                <div className="p-4 border-t border-sidebar-border bg-sidebar">
                    <div className="mb-4 p-3 bg-sidebar-accent/50 rounded-xl border border-sidebar-border">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-sidebar-primary/10 rounded-lg flex items-center justify-center text-sidebar-primary">
                                <Zap className="w-4 h-4 fill-current" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-sidebar-foreground">Pro Plan</p>
                                <p className="text-[10px] text-sidebar-foreground/60">Active until Dec 2025</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full bg-background text-foreground text-xs h-7 border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            Manage Subscription
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 px-2 py-2 mb-2 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-colors group">
                        <Avatar className="h-8 w-8 border border-sidebar-border">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate text-sidebar-foreground">John Doe</p>
                            <p className="text-xs text-sidebar-foreground/60 truncate">john@example.com</p>
                        </div>
                        <Settings className="w-4 h-4 text-sidebar-foreground/40 group-hover:text-sidebar-foreground" />
                    </div>

                    <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground w-full group">
                        <LogOut size={18} className="text-sidebar-foreground/50 group-hover:text-sidebar-foreground" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative bg-background">
                {/* Header */}
                <header className="h-16 px-4 md:px-8 flex items-center justify-between bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-border sticky top-0 z-20">
                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-foreground/70"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>

                    <div className="w-full max-w-md relative hidden lg:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Type to search..."
                            className="pl-9 bg-muted/50 border-input focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all h-9 text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 ml-auto">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                            <Bell className="w-5 h-5" />
                        </Button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8 bg-muted/20">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

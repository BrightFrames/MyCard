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
    X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const DashboardLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Overview", end: true },
        { to: "/dashboard/cards", icon: Smartphone, label: "My vCards" },
        { to: "/dashboard/enquiries", icon: MessageSquare, label: "Enquiries" },
        { to: "/dashboard/billing", icon: CreditCard, label: "Billing & Plan" },
        { to: "/dashboard/profile", icon: UserCircle, label: "Settings" },
    ];

    return (
        <div className="flex h-screen bg-gray-50/50 font-sans text-slate-900">
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - Clean Light Theme */}
            <aside className={`
                w-64 bg-white border-r border-gray-200 flex-col z-50
                fixed md:static inset-y-0 left-0
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                md:flex
            `}>
                {/* Mobile Close Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 md:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="h-16 flex items-center px-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 fill-current" />
                        </div>
                        GoBix
                    </div>
                </div>

                <div className="p-4">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Menu</div>
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-indigo-50 text-indigo-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 group'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon size={18} className={isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600"} />
                                        {item.label}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto p-4 border-t border-gray-100">
                    <div className="mb-4 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                                <Zap className="w-4 h-4 fill-current" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-900">Pro Plan</p>
                                <p className="text-[10px] text-indigo-600">Active until Dec 2025</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full bg-white text-xs h-7 border-indigo-200 hover:bg-indigo-100 hover:text-indigo-700">
                            Manage Subscription
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 px-2 py-2 mb-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <Avatar className="h-8 w-8 border border-gray-200">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate text-gray-900">John Doe</p>
                            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                        </div>
                        <Settings className="w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Header */}
                <header className="h-16 px-4 md:px-8 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20">
                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-gray-600"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>

                    <div className="w-full max-w-md relative hidden lg:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Type to search..."
                            className="pl-9 bg-gray-50 border-gray-200 focus:bg-white focus:border-indigo-500 transition-all h-9 text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 ml-auto">
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100/50">
                            <Bell className="w-5 h-5" />
                        </Button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8 bg-gray-50/50">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

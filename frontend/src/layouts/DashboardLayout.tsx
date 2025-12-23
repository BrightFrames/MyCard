import { Outlet, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Smartphone,
    Store,
    CreditCard,
    Settings,
    LogOut,
    Menu,
    X,
    Search,
    Bell,
    HelpCircle,
    ChevronDown,
    Zap,
    Image,
    BarChart3,
    Layers,
    User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useTour } from '@/hooks/use-tour';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { startTour } = useTour();

    const navItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
        { to: "/dashboard/cards", icon: Smartphone, label: "My Links" },
        { to: "/dashboard/media", icon: Image, label: "Media Library" },
        { to: "/dashboard/enquiries", icon: BarChart3, label: "Analytics" }, // Enquiries -> Analytics (naming match)
        // { to: "/dashboard/stores", icon: Store, label: "Store" }, // Keeping specific features maybe hidden for 'vCard' focus if needed, but keeping generally
        { to: "/dashboard/profile", icon: Settings, label: "Settings" },
    ];

    // Secondary more advanced items, maybe grouped
    const advancedItems = [
        { to: "/dashboard/stores", icon: Store, label: "Store" },
        { to: "/dashboard/nfc-cards", icon: CreditCard, label: "NFC Cards" },
    ];


    return (
        <div className="flex h-screen bg-[#F9FAFB] font-sans text-slate-900">
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 bg-white border-r border-slate-200 flex-col z-50
                fixed md:static inset-y-0 left-0
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                md:flex
            `}>
                <div className="h-16 flex items-center px-6 border-b border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-sm">
                            <Zap className="w-5 h-5 fill-current" />
                        </div>
                        <span className="">MyCard</span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="ml-auto md:hidden text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-hidden flex flex-col pt-6 px-4">
                    <ScrollArea className="flex-1 -mr-2 pr-2">
                        <div className="space-y-1 mb-8">
                            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Platform</p>
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.end}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-indigo-50 text-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`
                                    }
                                >
                                    <item.icon size={18} />
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="space-y-1">
                            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Commerce & NFC</p>
                            {advancedItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.end}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-indigo-50 text-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`
                                    }
                                >
                                    <item.icon size={18} />
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Profile Section */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer transition-all border border-transparent hover:border-slate-200">
                                <Avatar className="h-9 w-9 border border-indigo-100">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="bg-indigo-50 text-indigo-600">JD</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden text-left">
                                    <p className="text-sm font-semibold text-slate-900 truncate">John Doe</p>
                                    <p className="text-xs text-slate-500 truncate">Pro Plan</p>
                                </div>
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Header */}
                <header className="h-16 px-4 md:px-8 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden -ml-2 text-slate-500"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                        <div className="hidden md:flex relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
                            <Input
                                placeholder="Search..."
                                className="pl-9 w-64 md:w-80 bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500/20 transition-all h-9 text-sm rounded-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2 mr-4 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                            <Zap className="w-3 h-3 text-indigo-600 fill-current" />
                            <span className="text-xs font-semibold text-indigo-700">Pro Active</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full" onClick={startTour}>
                            <HelpCircle className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </Button>
                        <Button className="hidden md:flex ml-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 h-9 text-sm shadow-md shadow-indigo-200">
                            Create New
                        </Button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8 bg-[#F9FAFB]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

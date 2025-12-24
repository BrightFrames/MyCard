import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { ModeToggle } from "@/components/mode-toggle";
import {
    Calendar,
    DollarSign,
    Share2,
    Activity,
    ShoppingBag,
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
    const navigate = useNavigate();

    const handleLogout = () => {
        // In a real app, clear tokens here
        // localStorage.removeItem('token'); 
        navigate('/login');
    };

    const navItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
        { to: "/dashboard/cards", icon: Smartphone, label: "Business Cards" },
        { to: "/dashboard/stores", icon: Store, label: "Stores" },
        { to: "/dashboard/order-nfc", icon: CreditCard, label: "Order NFC Card" },
        { to: "/dashboard/orders", icon: ShoppingBag, label: "My Orders" },
        { to: "/dashboard/nfc-cards", icon: Layers, label: "My NFC Cards" },
        { to: "/dashboard/referral", icon: Share2, label: "Referral" },
        { to: "/dashboard/media", icon: Image, label: "Media" },
        { to: "/dashboard/appointments", icon: Calendar, label: "Appointments" },
        { to: "/dashboard/plans", icon: Activity, label: "Plans" },
        { to: "/dashboard/transactions", icon: DollarSign, label: "Transactions" },
        { to: "/dashboard/profile", icon: User, label: "My Account" },
    ];

    return (
        <div className="flex h-screen bg-[#F9FAFB] dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col z-50
                fixed md:static inset-y-0 left-0
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                md:flex
            `}>
                <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
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
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.end}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                                        }`
                                    }
                                >
                                    <item.icon size={18} />
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                            <div
                                onClick={handleLogout}
                                className="px-3 py-2 flex items-center gap-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg cursor-pointer transition-colors"
                            >
                                <LogOut size={18} />
                                <span className="text-sm font-medium">Logout</span>
                            </div>
                        </div>
                    </ScrollArea>
                </div>

                {/* Profile Section */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm cursor-pointer transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                <Avatar className="h-9 w-9 border border-indigo-100 dark:border-indigo-900">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="bg-indigo-50 text-indigo-600">JD</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden text-left">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">John Doe</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Pro Plan</p>
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
                            <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={handleLogout}>
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
                <header className="h-16 px-4 md:px-8 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20">
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
                                className="pl-9 w-64 md:w-80 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all h-9 text-sm rounded-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2 mr-4 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800">
                            <Zap className="w-3 h-3 text-indigo-600 dark:text-indigo-400 fill-current" />
                            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">Pro Active</span>
                        </div>
                        <ModeToggle />
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

                <div className="flex-1 overflow-auto p-4 md:p-8 bg-[#F9FAFB] dark:bg-slate-950">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

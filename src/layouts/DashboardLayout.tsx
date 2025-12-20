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
    Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const DashboardLayout = () => {
    const navItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
        { to: "/dashboard/cards", icon: Smartphone, label: "My vCards" },
        { to: "/dashboard/enquiries", icon: MessageSquare, label: "Enquiries" },
        { to: "/dashboard/billing", icon: CreditCard, label: "Plan & Billing" },
        { to: "/dashboard/profile", icon: UserCircle, label: "Profile Settings" },
    ];

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar - Blue Theme matching reference */}
            <aside className="w-[260px] bg-[#4318FF] text-white hidden md:flex flex-col rounded-r-3xl my-4 ml-4 shadow-xl overflow-hidden relative">
                {/* Background Pattern/Gradient overlay if needed, keeping it flat blue for now as per ref */}

                <div className="p-8 pb-4">
                    <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" fill="currentColor" />
                        </div>
                        MyCard
                    </h1>
                </div>

                <div className="px-6 mb-6">
                    <div className="h-[1px] bg-white/20 w-full" />
                </div>

                <ScrollArea className="flex-1 px-4">
                    <nav className="space-y-2">
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
                                <item.icon size={20} />
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </ScrollArea>

                {/* Upgrade Plan Box */}
                <div className="p-4 mx-4 mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                    <div className="relative z-10 text-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <Zap className="w-5 h-5 text-[#4318FF]" fill="currentColor" />
                        </div>
                        <h4 className="font-bold text-white text-sm">Upgrade to Pro</h4>
                        <p className="text-xs text-white/80 mt-1 mb-3">Unlock all features</p>
                        <Button size="sm" className="w-full bg-white text-[#4318FF] hover:bg-white/90 border-none font-bold shadow-sm h-8 rounded-lg">
                            Upgrade Now
                        </Button>
                    </div>
                </div>

                <div className="p-4 mt-auto">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
                    >
                        <LogOut size={20} className="mr-2" />
                        Sign Out
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
                            placeholder="Search settings..."
                            className="pl-10 bg-white border-transparent shadow-sm rounded-full h-11 focus-visible:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-white rounded-full shadow-sm bg-white border-transparent h-11 w-11 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </Button>
                        <div className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                            <Avatar className="h-9 w-9 border-2 border-slate-100">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="hidden md:block text-left mr-2">
                                <p className="text-xs font-bold text-slate-700">John Doe</p>
                                <p className="text-[10px] text-muted-foreground">Free Plan</p>
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

export default DashboardLayout;

import { Bell, Search, ChevronDown, Globe, User, Settings as SettingsIcon, LogOut as LogOutIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/menu": "Menu Management",
  "/tables": "Active Tables",
  "/inventory": "Inventory",
  "/reports": "Reports & Analytics",
  "/users": "User Management",
  "/promos": "Promo Codes",
  "/payments": "Payments",
  "/settings": "Settings",
};

export function TopHeader() {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="h-20 bg-background/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">{pageTitle}</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Welcome back, Vivek</p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/80 transition-colors border border-border/50">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">EN</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Hindi</DropdownMenuItem>
            <DropdownMenuItem>Spanish</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Notifications */}
        <button className="relative p-2.5 rounded-lg hover:bg-secondary/80 transition-colors border border-border/50">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
        </button>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/80 transition-colors border border-border/50">
            <Avatar className="w-9 h-9 ring-2 ring-primary/10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-sm">
                VS
              </AvatarFallback>
            </Avatar>
            <div className="text-left hidden md:block">
              <p className="text-sm font-semibold text-foreground">Vivek Singh</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="px-3 py-2 border-b border-border/50">
              <p className="text-sm font-semibold text-foreground">Vivek Singh Bhadoriya</p>
              <p className="text-xs text-muted-foreground mt-0.5">admin@mycard.com</p>
            </div>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link to="/settings" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link to="/settings" className="flex items-center gap-2">
                <SettingsIcon className="w-4 h-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="text-destructive cursor-pointer">
              <Link to="/login" className="flex items-center gap-2">
                <LogOutIcon className="w-4 h-4" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

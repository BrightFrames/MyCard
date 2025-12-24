import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Menu,
  Utensils,
  Package,
  BarChart3,
  Users,
  Tag,
  CreditCard,
  Settings,
  ChevronLeft,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/", group: "main" },
  { label: "Menu", icon: Menu, path: "/menu", group: "main" },
  { label: "Active Tables", icon: Utensils, path: "/tables", group: "main" },
  { label: "Inventory", icon: Package, path: "/inventory", group: "management" },
  { label: "Reports", icon: BarChart3, path: "/reports", group: "management" },
  { label: "Users", icon: Users, path: "/users", group: "management" },
  { label: "Promo Codes", icon: Tag, path: "/promos", group: "sales" },
  { label: "Payments", icon: CreditCard, path: "/payments", group: "sales" },
  { label: "Settings", icon: Settings, path: "/settings", group: "system" },
];

interface AppSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function AppSidebar({ collapsed, onCollapse }: AppSidebarProps) {
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed left-0 top-0 h-screen bg-sidebar/95 backdrop-blur-sm flex flex-col z-40 border-r border-sidebar-border"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border/50">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
          <Utensils className="w-5 h-5 text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="overflow-hidden"
            >
              <span className="font-bold text-xl text-foreground whitespace-nowrap bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                MyCard
              </span>
              <p className="text-xs text-muted-foreground whitespace-nowrap">Admin Panel</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 overflow-y-auto">
        <div className="space-y-1">
          {navItems.filter(item => item.group === 'main').map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sidebar-foreground/70 transition-all duration-200 group relative",
                  isActive && "bg-primary text-white shadow-lg shadow-primary/25",
                  !isActive && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5 flex-shrink-0 relative z-10", isActive && "text-white")} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className={cn("overflow-hidden whitespace-nowrap text-sm font-medium relative z-10", isActive && "text-white")}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {!collapsed && <div className="text-xs font-semibold text-muted-foreground/60 px-3 pt-6 pb-2">MANAGEMENT</div>}
        <div className="space-y-1">
          {navItems.filter(item => item.group === 'management').map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sidebar-foreground/70 transition-all duration-200 group relative",
                  isActive && "bg-primary text-white shadow-lg shadow-primary/25",
                  !isActive && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5 flex-shrink-0 relative z-10", isActive && "text-white")} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className={cn("overflow-hidden whitespace-nowrap text-sm font-medium relative z-10", isActive && "text-white")}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {!collapsed && <div className="text-xs font-semibold text-muted-foreground/60 px-3 pt-6 pb-2">SALES</div>}
        <div className="space-y-1">
          {navItems.filter(item => item.group === 'sales').map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sidebar-foreground/70 transition-all duration-200 group relative",
                  isActive && "bg-primary text-white shadow-lg shadow-primary/25",
                  !isActive && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5 flex-shrink-0 relative z-10", isActive && "text-white")} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className={cn("overflow-hidden whitespace-nowrap text-sm font-medium relative z-10", isActive && "text-white")}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {!collapsed && <div className="text-xs font-semibold text-muted-foreground/60 px-3 pt-6 pb-2">SYSTEM</div>}
        <div className="space-y-1">
          {navItems.filter(item => item.group === 'system').map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sidebar-foreground/70 transition-all duration-200 group relative",
                  isActive && "bg-primary text-white shadow-lg shadow-primary/25",
                  !isActive && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5 flex-shrink-0 relative z-10", isActive && "text-white")} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className={cn("overflow-hidden whitespace-nowrap text-sm font-medium relative z-10", isActive && "text-white")}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="px-4 py-4 border-t border-sidebar-border/50 space-y-2">
        <button
          onClick={() => onCollapse(!collapsed)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 w-full"
        >
          <ChevronLeft
            className={cn(
              "w-5 h-5 flex-shrink-0 transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium"
              >
                Collapse
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <Link
          to="/login"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-destructive/70 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </motion.aside>
  );
}

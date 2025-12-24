import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { AppSidebar } from "./AppSidebar";
import { TopHeader } from "./TopHeader";

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar collapsed={collapsed} onCollapse={setCollapsed} />
      
      <motion.div
        initial={false}
        animate={{ marginLeft: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col min-h-screen lg:ml-0"
      >
        <TopHeader />
        <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-secondary/20">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
}

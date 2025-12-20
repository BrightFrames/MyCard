
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import TemplateManager from "./pages/admin/TemplateManager";
import UserDashboard from "./pages/user/UserDashboard";
import ProfileSettings from "./pages/user/ProfileSettings";
import CardView from "./pages/public/CardView";
import LoginPage from "./pages/auth/LoginPage";

import VCardManagement from "./pages/admin/vCardManagement";
import PlansPricing from "./pages/admin/PlansPricing";
import PaymentManagement from "./pages/admin/PaymentManagement";
import EnquiriesModule from "./pages/admin/EnquiriesModule";
import ContentFeatures from "./pages/admin/ContentFeatures";
import MediaStorage from "./pages/admin/MediaStorage";

import DomainBranding from "./pages/admin/DomainBranding";
import PWASettings from "./pages/admin/PWASettings";
import ReportsAnalytics from "./pages/admin/ReportsAnalytics";
import SupportMaintenance from "./pages/admin/SupportMaintenance";
import SecurityCompliance from "./pages/admin/SecurityCompliance";

import MyCards from "./pages/user/MyCards";
import CardManager from "./pages/user/vcard/CardManager";
import EnquiriesList from "./pages/user/EnquiriesList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public Card Routes */}
          <Route path="/c" element={<PublicLayout />}>
            <Route path=":id" element={<CardView />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<PublicLayout />}>
            <Route index element={<LoginPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="templates" element={<TemplateManager />} />
            <Route path="vcards" element={<VCardManagement />} />
            <Route path="plans" element={<PlansPricing />} />
            <Route path="payments" element={<PaymentManagement />} />
            <Route path="enquiries" element={<EnquiriesModule />} />
            <Route path="content" element={<ContentFeatures />} />
            <Route path="media" element={<MediaStorage />} />
            <Route path="domains" element={<DomainBranding />} />
            <Route path="pwa" element={<PWASettings />} />
            <Route path="reports" element={<ReportsAnalytics />} />
            <Route path="support" element={<SupportMaintenance />} />
            <Route path="security" element={<SecurityCompliance />} />
            <Route path="settings" element={<div className="p-4">Settings Module (Coming Soon)</div>} />
          </Route>

          {/* User Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="cards" element={<MyCards />} />
            <Route path="cards/:id/edit" element={<CardManager />} />
            <Route path="cards/new" element={<CardManager />} /> {/* Reusing editor for new for now */}
            <Route path="enquiries" element={<EnquiriesList />} />
            <Route path="billing" element={<div className="p-6"><h2 className="text-2xl font-bold">Billing & Plans</h2><p className="text-muted-foreground">Manage your subscription.</p></div>} />
            <Route path="profile" element={<ProfileSettings />} />
          </Route>

          {/* Fallback / Landing - Redirecting to login for now */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

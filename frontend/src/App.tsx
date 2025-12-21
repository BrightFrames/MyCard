
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
import Stores from "./pages/user/Stores";
import OrderNFC from "./pages/user/OrderNFC";
import MyOrders from "./pages/user/MyOrders";
import MyNFCCards from "./pages/user/MyNFCCards";
import Referral from "./pages/user/Referral";
import Media from "./pages/user/Media";
import Transactions from "./pages/user/Transactions";
import PlansPage from "./pages/user/PlansPage";


import LandingPage from "./pages/public/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
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
            <Route path="themes" element={<div className="p-8">Themes Module (Dummy)</div>} />
            <Route path="plans" element={<PlansPricing />} />
            <Route path="customers" element={<div className="p-8">Customers Management (Dummy)</div>} />
            <Route path="vcards" element={<VCardManagement />} />
            <Route path="domains" element={<DomainBranding />} />
            <Route path="nfc-cards" element={<div className="p-8">NFC Cards Management (Dummy)</div>} />
            <Route path="referrals" element={<div className="p-8">Referral System (Dummy)</div>} />
            <Route path="plugins" element={<div className="p-8">Plugins Module (Dummy)</div>} />
            <Route path="payments" element={<PaymentManagement />} />
            <Route path="coupons" element={<div className="p-8">Coupons Module (Dummy)</div>} />
            <Route path="web-templates" element={<div className="p-8">Web Templates Module (Dummy)</div>} />
            <Route path="blogs" element={<div className="p-8">Blog Management (Dummy)</div>} />
            <Route path="iap" element={<div className="p-8">In-App Purchases (Dummy)</div>} />
            <Route path="transactions" element={<div className="p-8">Transactions Log (Dummy)</div>} />
            <Route path="translations" element={<div className="p-8">Translations Module (Dummy)</div>} />
            <Route path="marketing" element={<div className="p-8">Marketing Tools (Dummy)</div>} />
            <Route path="notifications" element={<div className="p-8">Web Notifications (Dummy)</div>} />

            {/* Kept existing routes that might still be useful or can be hidden */}
            <Route path="enquiries" element={<EnquiriesModule />} />
            <Route path="content" element={<ContentFeatures />} />
            <Route path="media" element={<MediaStorage />} />
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
            <Route path="cards/new" element={<CardManager />} />
            <Route path="stores" element={<Stores />} />
            <Route path="order-nfc" element={<OrderNFC />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="nfc-cards" element={<MyNFCCards />} />
            <Route path="referral" element={<Referral />} />
            <Route path="media" element={<Media />} />
            <Route path="plans" element={<PlansPage />} />
            <Route path="billing" element={<div className="p-6"><h2 className="text-2xl font-bold">Billing & Plans</h2><p className="text-muted-foreground">Manage your subscription.</p></div>} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="enquiries" element={<EnquiriesList />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

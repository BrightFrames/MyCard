import { Utensils, DollarSign, Users as UsersIcon, UserCheck } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentOrdersTable, Order } from "@/components/dashboard/RecentOrdersTable";
import { ReportsOverview } from "@/components/dashboard/ReportsOverview";
import { DashboardParallaxBackground } from "@/components/dashboard/DashboardParallaxBackground";

const sampleOrders: Order[] = [
  {
    id: "1",
    orderId: "R5_1766159135201_264",
    table: "Table T1",
    status: "Served",
    dateTime: "12/19/2025, 9:15:35 PM",
    amount: "₹58.8",
  },
  {
    id: "2",
    orderId: "R5_1766000707030_935",
    table: "Table T1",
    status: "Served",
    dateTime: "12/18/2025, 1:15:07 AM",
    amount: "₹58.8",
  },
  {
    id: "3",
    orderId: "R5_1765999199232_583",
    table: "Table T1",
    status: "Served",
    dateTime: "12/18/2025, 12:49:59 AM",
    amount: "₹58.8",
  },
  {
    id: "4",
    orderId: "R5_1765473494526_485",
    table: "Table T2",
    status: "Served",
    dateTime: "12/11/2025, 10:48:15 PM",
    amount: "₹58.8",
  },
  {
    id: "5",
    orderId: "R5_1765473357818_764",
    table: "Table T1",
    status: "Served",
    dateTime: "12/11/2025, 10:45:58 PM",
    amount: "₹12.6",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 md:space-y-8 relative min-h-screen p-4 sm:p-6 lg:p-8">
      <DashboardParallaxBackground />
      <div className="relative z-10 space-y-6 md:space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            title="Total Orders"
            value="0"
            trend={{ value: "5% from last month", positive: false }}
            icon={Utensils}
            delay={0}
          />
          <StatCard
            title="Revenue"
            value="₹0"
            trend={{ value: "+8% from last month", positive: true }}
            icon={DollarSign}
            delay={0.1}
          />
          <StatCard
            title="Active Tables"
            value="2"
            subtitle="Current Occupancy"
            icon={UsersIcon}
            progress={100}
            delay={0.2}
          />
          <StatCard
            title="Staff Count"
            value="2"
            subtitle="Online: 2"
            icon={UserCheck}
            delay={0.3}
          />
        </div>

        {/* Recent Orders */}
        <RecentOrdersTable orders={sampleOrders} />

        {/* Reports Overview */}
        <ReportsOverview />
      </div>
    </div>
  );
};

export default Dashboard;

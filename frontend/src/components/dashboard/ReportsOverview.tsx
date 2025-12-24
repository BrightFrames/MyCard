import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { date: "12-13", revenue: 0 },
  { date: "12-14", revenue: 0 },
  { date: "12-15", revenue: 15 },
  { date: "12-16", revenue: 90 },
  { date: "12-17", revenue: 120 },
  { date: "12-18", revenue: 85 },
  { date: "12-19", revenue: 45 },
];

const topDishesData = [
  { name: "Butter Chicken", orders: 45 },
  { name: "Paneer Tikka", orders: 38 },
  { name: "Biryani", orders: 32 },
  { name: "Dal Makhani", orders: 28 },
  { name: "Naan", orders: 24 },
];

export function ReportsOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Revenue Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-foreground">Revenue Trend</h3>
            <p className="text-sm text-muted-foreground mt-1">Last 7 days performance</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
            Today
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3, 31.8%, 91.4%)" opacity={0.5} />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215.4, 16.3%, 46.9%)", fontSize: 12, fontWeight: 500 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215.4, 16.3%, 46.9%)", fontSize: 12, fontWeight: 500 }}
                tickFormatter={(value) => `₹${value}`}
                dx={-10}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(214.3, 31.8%, 91.4%)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  padding: "12px",
                }}
                labelStyle={{
                  fontWeight: 600,
                  color: "hsl(222, 47%, 11%)",
                  marginBottom: "4px",
                }}
                formatter={(value: number) => [`₹${value}`, "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(221, 83%, 53%)"
                strokeWidth={3}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Top Selling Dishes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-foreground">Top Selling Dishes</h3>
            <p className="text-sm text-muted-foreground mt-1">Most popular items today</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold">
            Top 5
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topDishesData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3, 31.8%, 91.4%)" horizontal={false} opacity={0.5} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215.4, 16.3%, 46.9%)", fontSize: 12, fontWeight: 500 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215.4, 16.3%, 46.9%)", fontSize: 12, fontWeight: 500 }}
                width={120}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(214.3, 31.8%, 91.4%)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  padding: "12px",
                }}
                labelStyle={{
                  fontWeight: 600,
                  color: "hsl(222, 47%, 11%)",
                  marginBottom: "4px",
                }}
                formatter={(value: number) => [`${value} orders`, "Total"]}
              />
              <Bar
                dataKey="orders"
                fill="hsl(221, 83%, 53%)"
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="card-elevated p-5 mt-6"
    >
      <h2 className="text-lg font-semibold text-foreground mb-6">
        Reports Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Trend */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Revenue Trend (Today)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(220, 60%, 45%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(220, 60%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 20%, 88%)" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(20, 10%, 45%)", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(20, 10%, 45%)", fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(40, 20%, 88%)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value: number) => [`₹${value}`, "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(220, 60%, 45%)"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Selling Dishes */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Top Selling Dishes (Today)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topDishesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 20%, 88%)" horizontal={false} />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(20, 10%, 45%)", fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(20, 10%, 45%)", fontSize: 12 }}
                  width={100}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(40, 20%, 88%)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value: number) => [`${value} orders`, "Orders"]}
                />
                <Bar
                  dataKey="orders"
                  fill="hsl(15, 80%, 55%)"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

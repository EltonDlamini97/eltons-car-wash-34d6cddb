import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, DollarSign, Users, Star, ArrowUpRight } from "lucide-react";
import { adminStats, revenueChart, topServicesChart, adminBookings, recentCustomers } from "@/lib/data";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, CartesianGrid,
} from "recharts";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Sparkle" }, { name: "robots", content: "noindex" }] }),
  component: AdminDashboard,
});

const COLORS = ["oklch(0.63 0.17 250)", "oklch(0.82 0.16 85)", "oklch(0.38 0.16 260)", "oklch(0.7 0.15 180)", "oklch(0.65 0.2 20)"];

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of today's activity across all locations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Today's bookings" value={adminStats.todayBookings.toString()} delta="+12%" icon={CalendarDays} />
        <KpiCard label="Monthly revenue" value={`$${adminStats.monthlyRevenue.toLocaleString()}`} delta="+7.2%" icon={DollarSign} />
        <KpiCard label="Active memberships" value={adminStats.activeMemberships.toString()} delta="+18" icon={Users} />
        <KpiCard label="Average rating" value={adminStats.avgRating.toFixed(1)} delta="4.9 ★" icon={Star} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-0 shadow-soft lg:col-span-2">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">Revenue trend</h2>
              <Badge variant="secondary">Last 7 months</Badge>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueChart}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft">
          <CardContent className="p-6">
            <h2 className="font-semibold">Top services</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={topServicesChart} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={4}>
                  {topServicesChart.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1 text-sm">
              {topServicesChart.map((s, i) => (
                <div key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: COLORS[i] }} />{s.name}</span>
                  <span className="font-semibold">{s.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-0 shadow-soft lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="mb-4 font-semibold">Recent bookings</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs uppercase text-muted-foreground">
                  <tr className="border-b">
                    <th className="py-2 text-left">ID</th>
                    <th className="py-2 text-left">Customer</th>
                    <th className="py-2 text-left">Service</th>
                    <th className="py-2 text-left">Date</th>
                    <th className="py-2 text-left">Status</th>
                    <th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {adminBookings.slice(0, 6).map((b) => (
                    <tr key={b.id} className="border-b last:border-0">
                      <td className="py-3 font-mono text-xs">{b.id}</td>
                      <td className="py-3 font-medium">{b.customer}</td>
                      <td className="py-3 text-muted-foreground">{b.service}</td>
                      <td className="py-3 text-muted-foreground">{b.date}</td>
                      <td className="py-3"><StatusBadge s={b.status} /></td>
                      <td className="py-3 text-right font-semibold">${b.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft">
          <CardContent className="p-6">
            <h2 className="mb-4 font-semibold">Top customers</h2>
            <div className="space-y-4">
              {recentCustomers.map((c) => (
                <div key={c.email} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{c.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{c.visits} visits · {c.membership}</div>
                  </div>
                  <div className="text-sm font-bold">${c.spent}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KpiCard({ label, value, delta, icon: Icon }: { label: string; value: string; delta: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <Card className="border-0 shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-muted-foreground">{label}</div>
            <div className="mt-1 font-display text-2xl font-bold">{value}</div>
            <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-600"><ArrowUpRight className="h-3 w-3" /> {delta}</div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ s }: { s: string }) {
  const map: Record<string, string> = {
    confirmed: "bg-primary/10 text-primary",
    pending: "bg-amber-100 text-amber-700",
    completed: "bg-emerald-100 text-emerald-700",
    cancelled: "bg-muted text-muted-foreground",
  };
  return <Badge className={`${map[s]} border-0 capitalize hover:${map[s]}`}>{s}</Badge>;
}

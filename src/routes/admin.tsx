import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Sparkles, LayoutDashboard, CalendarDays, Users, CreditCard, Star, Image as ImageIcon, Wrench, Settings, ChartBar, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Sparkle Car Wash" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayout,
});

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/bookings", label: "Bookings", icon: CalendarDays },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
  { to: "/admin/reviews", label: "Reviews", icon: Star },
  { to: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { to: "/admin/services", label: "Services", icon: Wrench },
  { to: "/admin/reports", label: "Reports", icon: ChartBar },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

function AdminLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-dvh bg-muted/30">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r bg-card lg:flex">
        <Link to="/" className="flex items-center gap-2 border-b px-6 py-5 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          Sparkle Admin
        </Link>
        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((n) => {
            const active = n.exact ? path === n.to : path.startsWith(n.to);
            return (
              <Link
                key={n.to} to={n.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-gradient-brand text-primary-foreground shadow-soft" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t p-3">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary">
            <LogOut className="h-4 w-4" /> Back to site
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <div className="text-sm text-muted-foreground">Welcome back, <span className="font-semibold text-foreground">Alex</span></div>
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost"><Bell className="h-4 w-4" /></Button>
            <Avatar className="h-9 w-9"><AvatarImage src="https://i.pravatar.cc/120?img=60" /><AvatarFallback>A</AvatarFallback></Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6"><Outlet /></main>
      </div>
    </div>
  );
}

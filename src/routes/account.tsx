import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, CalendarClock, Gift, User } from "lucide-react";
import { adminBookings } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account — Sparkle Car Wash" },
      { name: "description", content: "Manage your bookings, membership, invoices and loyalty points." },
      { property: "og:title", content: "Customer Dashboard — Sparkle Car Wash" },
      { property: "og:url", content: "/account" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const myBookings = adminBookings.slice(0, 5);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14"><AvatarImage src="https://i.pravatar.cc/120?img=47" /><AvatarFallback>SM</AvatarFallback></Avatar>
          <div>
            <h1 className="font-display text-2xl font-bold">Welcome back, Sarah</h1>
            <p className="text-sm text-muted-foreground">Gold member · Since 2024</p>
          </div>
        </div>
        <Link to="/booking"><Button className="bg-gradient-brand">Book new appointment</Button></Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <StatCard title="Upcoming bookings" value="2" icon={CalendarClock} />
        <StatCard title="Loyalty points" value="1,240" icon={Gift} extra={<Progress value={62} className="mt-3 h-2" />} />
        <StatCard title="Membership" value="Gold" icon={User} sub="Renews Aug 15, 2026" />
      </div>

      <Tabs defaultValue="bookings" className="mt-10">
        <TabsList>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings" className="mt-6">
          <Card className="border-0 shadow-soft"><CardContent className="p-0">
            <div className="divide-y">
              {myBookings.map((b) => (
                <div key={b.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 sm:grid-cols-4">
                  <div className="min-w-0">
                    <div className="font-semibold">{b.service}</div>
                    <div className="text-xs text-muted-foreground">{b.vehicle} · {b.id}</div>
                  </div>
                  <div className="hidden text-sm sm:block"><div>{b.date}</div><div className="text-xs text-muted-foreground">{b.time}</div></div>
                  <div className="hidden sm:block"><StatusBadge s={b.status} /></div>
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline" onClick={() => toast.success("Rescheduled")}>Reschedule</Button>
                    <Button size="sm" variant="ghost" onClick={() => toast("Booking cancelled")}>Cancel</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="invoices" className="mt-6">
          <Card className="border-0 shadow-soft"><CardContent className="p-0">
            <div className="divide-y">
              {myBookings.map((b) => (
                <div key={b.id} className="flex items-center justify-between p-5">
                  <div>
                    <div className="font-semibold">{b.id}</div>
                    <div className="text-xs text-muted-foreground">{b.date} · {b.service}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">${b.amount}</span>
                    <Button size="sm" variant="outline" onClick={() => toast.success("Invoice downloaded")}><Download className="mr-1 h-4 w-4" /> PDF</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <Card className="border-0 shadow-soft"><CardContent className="p-6">
            <form className="grid gap-4 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); toast.success("Profile updated"); }}>
              <div className="space-y-2"><Label>Full name</Label><Input defaultValue="Sarah Mitchell" /></div>
              <div className="space-y-2"><Label>Email</Label><Input defaultValue="sarah@example.com" /></div>
              <div className="space-y-2"><Label>Phone</Label><Input defaultValue="(555) 010-0042" /></div>
              <div className="space-y-2"><Label>Default vehicle</Label><Input defaultValue="BMW X5 · ABC-1234" /></div>
              <div className="md:col-span-2"><Button type="submit" className="bg-gradient-brand">Save changes</Button></div>
            </form>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StatCard({ title, value, sub, icon: Icon, extra }: { title: string; value: string; sub?: string; icon: React.ComponentType<{ className?: string }>; extra?: React.ReactNode }) {
  return (
    <Card className="border-0 shadow-soft"><CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-muted-foreground">{title}</div>
          <div className="mt-1 font-display text-3xl font-bold">{value}</div>
          {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
      </div>
      {extra}
    </CardContent></Card>
  );
}

function StatusBadge({ s }: { s: string }) {
  const map: Record<string, string> = {
    confirmed: "bg-primary/10 text-primary",
    pending: "bg-accent/20 text-accent-foreground",
    completed: "bg-emerald-100 text-emerald-700",
    cancelled: "bg-muted text-muted-foreground",
  };
  return <Badge className={`${map[s]} border-0 capitalize hover:${map[s]}`}>{s}</Badge>;
}

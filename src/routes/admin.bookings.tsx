import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Printer, Search } from "lucide-react";
import { adminBookings } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/bookings")({
  head: () => ({ meta: [{ title: "Bookings — Sparkle Admin" }, { name: "robots", content: "noindex" }] }),
  component: BookingsAdmin,
});

function BookingsAdmin() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");
  const list = adminBookings.filter((b) =>
    (status === "all" || b.status === status) &&
    (b.customer.toLowerCase().includes(q.toLowerCase()) || b.id.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Bookings</h1>
          <p className="text-sm text-muted-foreground">Manage all appointments across your locations.</p>
        </div>
        <Button className="bg-gradient-brand">+ New booking</Button>
      </div>

      <Card className="border-0 shadow-soft">
        <CardContent className="p-4">
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or ID" className="pl-9" />
            </div>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-soft">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Vehicle</th>
                  <th className="p-4 text-left">When</th>
                  <th className="p-4 text-left">Staff</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-right">Amount</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {list.map((b) => (
                  <tr key={b.id} className="border-t hover:bg-muted/30">
                    <td className="p-4 font-mono text-xs">{b.id}</td>
                    <td className="p-4 font-medium">{b.customer}</td>
                    <td className="p-4">{b.service}</td>
                    <td className="p-4 text-muted-foreground">{b.vehicle}</td>
                    <td className="p-4"><div>{b.date}</div><div className="text-xs text-muted-foreground">{b.time}</div></td>
                    <td className="p-4 text-muted-foreground">{b.staff ?? "—"}</td>
                    <td className="p-4"><StatusBadge s={b.status} /></td>
                    <td className="p-4 text-right font-semibold">${b.amount}</td>
                    <td className="p-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button size="icon" variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toast.success("Booking approved")}>Approve</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast("Reschedule dialog opened")}>Reschedule</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast("Staff assigned")}>Assign staff</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast.success("Sent to printer")}><Printer className="mr-2 h-4 w-4" />Print</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast.error("Booking cancelled")} className="text-destructive">Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
                {list.length === 0 && <tr><td colSpan={9} className="p-8 text-center text-muted-foreground">No bookings found</td></tr>}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
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

import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Sparkles } from "lucide-react";
import { membershipPlans, membershipCompare } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Sparkle Car Wash" },
      { name: "description", content: "Silver, Gold and Platinum monthly plans with unlimited washes, priority booking and free perks." },
      { property: "og:title", content: "Memberships — Sparkle Car Wash" },
      { property: "og:description", content: "From $29/mo. Cancel anytime." },
      { property: "og:url", content: "/membership" },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="text-sm font-semibold uppercase tracking-wider text-primary">Memberships</div>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Wash more. Pay less.</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Auto-renewing monthly plans. Cancel anytime.</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {membershipPlans.map((m) => (
          <Card key={m.id} className={`relative overflow-hidden border-0 ${m.popular ? "shadow-elegant ring-2 ring-primary lg:scale-105" : "shadow-soft"}`}>
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${m.color}`} />
            {m.popular && <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground">Most popular</Badge>}
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{typeof m.washesPerMonth === "number" ? `${m.washesPerMonth} washes / month` : "Unlimited washes"}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">${m.price}</span>
                <span className="text-muted-foreground">/ mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {m.perks.map((p) => <li key={p} className="flex gap-2"><Sparkles className="h-4 w-4 shrink-0 text-accent" />{p}</li>)}
              </ul>
              <Button
                onClick={() => toast.success(`Subscribed to ${m.name} plan!`)}
                className={`mt-8 w-full ${m.popular ? "bg-gradient-brand shadow-glow" : ""}`}
                variant={m.popular ? "default" : "outline"}
              >Subscribe</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Compare */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-bold">Compare all plans</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Silver</th>
                <th className="p-4 text-center font-semibold text-primary">Gold</th>
                <th className="p-4 text-center font-semibold">Platinum</th>
              </tr>
            </thead>
            <tbody>
              {membershipCompare.map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-center">{cellDisplay(row.silver)}</td>
                  <td className="p-4 text-center bg-primary/5">{cellDisplay(row.gold)}</td>
                  <td className="p-4 text-center">{cellDisplay(row.platinum)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function cellDisplay(v: string | boolean) {
  if (v === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (v === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  return <span className="font-medium">{v}</span>;
}

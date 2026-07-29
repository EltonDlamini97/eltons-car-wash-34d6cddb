import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "@/lib/data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sparkle Car Wash" },
      { name: "description", content: "Transparent pricing from $19. Compare Basic, Standard, Premium, Luxury and Fleet packages." },
      { property: "og:title", content: "Pricing — Sparkle Car Wash" },
      { property: "og:description", content: "No surprises. Simple, honest pricing." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</div>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Simple, transparent pricing.</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Pay-per-wash or save more with a monthly membership.</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {pricingPlans.map((p) => (
          <Card key={p.id} className={`relative border-0 ${p.popular ? "shadow-elegant ring-2 ring-primary lg:scale-105" : "shadow-soft"}`}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-primary-foreground">
                Most popular
              </span>
            )}
            <CardContent className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{p.tagline}</div>
              <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">${p.price}</span>
                <span className="text-sm text-muted-foreground">/ {p.duration}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{f}</li>
                ))}
              </ul>
              <Link to="/booking"><Button className={`mt-6 w-full ${p.popular ? "bg-gradient-brand" : ""}`} variant={p.popular ? "default" : "outline"}>
                Book appointment
              </Button></Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-hero p-10 text-center text-white shadow-elegant">
        <Sparkles className="mx-auto h-8 w-8 text-accent" />
        <h2 className="mt-4 font-display text-3xl font-bold">Save 40% with a membership</h2>
        <p className="mx-auto mt-2 max-w-xl text-white/70">Wash weekly, pay monthly. Plans from $29.</p>
        <Link to="/membership"><Button className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Explore memberships</Button></Link>
      </div>
    </div>
  );
}

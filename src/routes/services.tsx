import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sparkle Car Wash" },
      { name: "description", content: "Explore our full menu of hand washes, detailing, ceramic coating, engine cleaning and fleet services." },
      { property: "og:title", content: "Services — Sparkle Car Wash" },
      { property: "og:description", content: "Every service is hand-performed by certified detailers." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="text-sm font-semibold uppercase tracking-wider text-primary">Services</div>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Everything your car needs.</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          From a 30-minute foam bath to a full 4-hour detailing transformation — pick the level of care your car deserves.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.id} className="group overflow-hidden border-0 py-0 shadow-soft transition hover:shadow-elegant hover:-translate-y-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              {s.featured && <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">Popular</Badge>}
              <div className="absolute right-3 top-3">
                <Badge className="bg-white/90 text-foreground">${s.startingPrice}+</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-primary">
                <s.icon className="h-4 w-4" />
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs font-semibold uppercase tracking-wider">{s.duration}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">From <span className="font-bold text-foreground">${s.startingPrice}</span></span>
                <Link to="/booking"><Button size="sm" className="bg-gradient-brand">Book <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button></Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

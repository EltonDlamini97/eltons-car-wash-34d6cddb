import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight, Star, Sparkles, Shield, Clock, Award, ChevronRight, Play, MapPin, Phone, Mail,
} from "lucide-react";
import { services, pricingPlans, reviews, membershipPlans, faqs, stats, galleryImages, businessInfo } from "@/lib/data";
import heroImg from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparkle Car Wash — Premium Detailing & Car Wash in Austin" },
      { name: "description", content: "Book premium hand car wash, detailing and ceramic coating in Austin. Trusted by 45,000+ drivers. Memberships from $29/mo." },
      { property: "og:title", content: "Sparkle Car Wash — Premium Detailing" },
      { property: "og:description", content: "Your car deserves the best shine. Book a premium wash in 60 seconds." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-36 text-white">
          <Badge className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur">
            <Sparkles className="mr-1 h-3 w-3 text-accent" /> Trusted by 45,000+ drivers
          </Badge>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Your car deserves the <span className="text-gradient">best shine</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Hand wash. Full detailing. Ceramic coating. Booked online in 60 seconds — done to showroom standard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/booking">
              <Button size="lg" className="bg-gradient-brand shadow-glow">
                Book Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Play className="mr-1 h-4 w-4" /> View Services
              </Button>
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader eyebrow="Why choose us" title="Detailing done properly." subtitle="Every car gets the same obsessive attention." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Shield, title: "Paint-safe products", desc: "pH-neutral foams, plush microfibers, zero swirls guaranteed." },
            { icon: Clock, title: "On-time, always", desc: "Live time-slot booking. If we're late, your wash is free." },
            { icon: Award, title: "Certified specialists", desc: "IDA & Gtechniq-certified detailers on every appointment." },
          ].map((f) => (
            <Card key={f.title} className="border-0 shadow-soft transition hover:shadow-elegant hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="Our services" title="From quick washes to full transformations." />
            <Link to="/services"><Button variant="ghost">All services <ChevronRight className="h-4 w-4" /></Button></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Card key={s.id} className="group overflow-hidden border-0 py-0 shadow-soft transition hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-white/90 text-foreground">${s.startingPrice}+</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <s.icon className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{s.duration}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                  <Link to="/booking" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    Book now <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader eyebrow="Simple pricing" title="Choose the wash you deserve." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.slice(0, 4).map((p) => (
            <Card key={p.id} className={`relative border-0 ${p.popular ? "shadow-elegant ring-2 ring-primary" : "shadow-soft"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-primary-foreground">
                  Most popular
                </span>
              )}
              <CardContent className="p-6">
                <div className="text-sm font-semibold uppercase text-primary">{p.tagline}</div>
                <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">${p.price}</span>
                  <span className="text-sm text-muted-foreground">/ {p.duration}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2"><Sparkles className="h-4 w-4 shrink-0 text-accent" />{f}</li>
                  ))}
                </ul>
                <Link to="/booking"><Button className="mt-6 w-full" variant={p.popular ? "default" : "outline"}>Book</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Customer love" title="Rated 4.9 out of 5" light />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="rounded-2xl glass-dark p-6">
                <div className="flex items-center gap-3">
                  <Avatar><AvatarImage src={r.avatar} /><AvatarFallback>{r.name[0]}</AvatarFallback></Avatar>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-white/60">{r.service}</div>
                  </div>
                </div>
                <div className="mt-3 flex text-accent">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm text-white/80">"{r.comment}"</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/reviews"><Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">Read all reviews</Button></Link>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader eyebrow="Before & after" title="The Sparkle transformation." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <img src={galleryImages.beforeAfter} alt="Before after 1" loading="lazy" className="col-span-2 aspect-video w-full rounded-3xl object-cover shadow-elegant" />
          <div className="grid gap-4">
            <img src={galleryImages.interior} alt="Interior detail" loading="lazy" className="h-full w-full rounded-3xl object-cover shadow-soft" />
            <img src={galleryImages.ceramic} alt="Ceramic coating" loading="lazy" className="h-full w-full rounded-3xl object-cover shadow-soft" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery"><Button variant="outline">See full gallery <ChevronRight className="h-4 w-4" /></Button></Link>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Membership" title="Wash more, pay less." subtitle="Auto-renewing plans starting at $29/mo." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {membershipPlans.map((m) => (
              <Card key={m.id} className={`relative overflow-hidden border-0 ${m.popular ? "shadow-elegant ring-2 ring-primary" : "shadow-soft"}`}>
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.color}`} />
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold">${m.price}</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    {m.perks.map((p) => <li key={p} className="flex gap-2"><Sparkles className="h-4 w-4 shrink-0 text-accent" />{p}</li>)}
                  </ul>
                  <Link to="/membership"><Button className="mt-6 w-full">Subscribe</Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="FAQ" title="Answers to common questions." />
            <p className="mt-4 text-muted-foreground">
              Can't find what you're looking for? <Link to="/contact" className="text-primary underline">Get in touch</Link>.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Visit us" title="Come say hi." />
            <div className="mt-6 space-y-4">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /><span>{businessInfo.address}</span></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-primary" /><span>{businessInfo.phone}</span></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-primary" /><span>{businessInfo.email}</span></div>
            </div>
            <div className="mt-8 flex gap-3">
              <Link to="/booking"><Button className="bg-gradient-brand">Book appointment</Button></Link>
              <Link to="/contact"><Button variant="outline">Contact page</Button></Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border shadow-soft">
            <iframe title="Location" src={businessInfo.mapEmbed} className="h-80 w-full" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ eyebrow, title, subtitle, light }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className={light ? "text-white" : ""}>
      <div className={`text-sm font-semibold uppercase tracking-wider ${light ? "text-accent" : "text-primary"}`}>{eyebrow}</div>
      <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className={`mt-3 max-w-2xl ${light ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

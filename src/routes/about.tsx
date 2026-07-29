import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Target, Eye } from "lucide-react";
import { team, stats } from "@/lib/data";
import beforeAfter from "@/assets/before-after.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sparkle Car Wash" },
      { name: "description", content: "12 years of premium hand detailing in Austin. Meet the team behind Sparkle Car Wash." },
      { property: "og:title", content: "About — Sparkle Car Wash" },
      { property: "og:description", content: "Certified detailers. Obsessive attention to detail." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">About us</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">12 years of obsessive care for your car.</h1>
          <p className="mt-4 text-muted-foreground">
            Sparkle Car Wash started in a single-bay Austin garage in 2014 with one belief:
            every car — daily driver or dream machine — deserves showroom-grade care. Today we run
            three studios and a team of 24 certified detailers, still hand-washing every vehicle that rolls in.
          </p>
        </div>
        <img src={beforeAfter} alt="Detailing at Sparkle" loading="lazy" className="rounded-3xl shadow-elegant" />
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            { icon: Target, title: "Mission", body: "Deliver flawless, honest detailing that respects your time and your paint." },
            { icon: Eye, title: "Vision", body: "Set the national standard for what a neighborhood car wash can be." },
            { icon: Award, title: "Values", body: "Craft, transparency, and treating every car like our own." },
          ].map((v) => (
            <Card key={v.title} className="border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold">By the numbers</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-card p-6 text-center shadow-soft">
              <div className="font-display text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold">Meet the team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <Card key={t.name} className="border-0 text-center shadow-soft">
                <CardContent className="p-6">
                  <Avatar className="mx-auto h-24 w-24"><AvatarImage src={t.avatar} /><AvatarFallback>{t.name[0]}</AvatarFallback></Avatar>
                  <h3 className="mt-4 font-bold">{t.name}</h3>
                  <div className="text-sm text-primary">{t.role}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold">Certifications</h2>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-6 text-muted-foreground">
          {["IDA Certified", "Gtechniq Accredited", "Ceramic Pro Elite", "SB90 Compliant", "Google Guaranteed"].map((c) => (
            <span key={c} className="rounded-full border px-4 py-2 text-sm font-semibold">{c}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

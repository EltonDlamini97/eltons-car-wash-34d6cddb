import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { businessInfo } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sparkle Car Wash" },
      { name: "description", content: "Visit, call, or message Sparkle Car Wash in Austin. Business hours and directions." },
      { property: "og:title", content: "Contact — Sparkle Car Wash" },
      { property: "og:description", content: "We'd love to hear from you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</div>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Let's talk.</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Reach us by phone, email, WhatsApp or drop us a message.</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          {[
            { icon: MapPin, title: "Studio", val: businessInfo.address },
            { icon: Phone, title: "Phone", val: businessInfo.phone },
            { icon: Mail, title: "Email", val: businessInfo.email },
          ].map((i) => (
            <Card key={i.title} className="border-0 shadow-soft">
              <CardContent className="flex gap-4 p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><i.icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-semibold">{i.title}</div>
                  <div className="text-sm text-muted-foreground">{i.val}</div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 font-semibold"><Clock className="h-4 w-4 text-primary" /> Business hours</div>
              <ul className="mt-3 space-y-1 text-sm">
                {businessInfo.hours.map((h) => (
                  <li key={h.day} className="flex justify-between"><span className="text-muted-foreground">{h.day}</span><span>{h.time}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <a
            href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 font-semibold text-white shadow-soft transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>

        <Card className="border-0 shadow-elegant lg:col-span-2">
          <CardContent className="p-8">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll be in touch shortly."); (e.target as HTMLFormElement).reset(); }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label>Full name</Label><Input required placeholder="Jane Doe" /></div>
                <div className="space-y-2"><Label>Email</Label><Input required type="email" placeholder="jane@email.com" /></div>
              </div>
              <div className="space-y-2"><Label>Subject</Label><Input placeholder="How can we help?" /></div>
              <div className="space-y-2"><Label>Message</Label><Textarea required rows={5} placeholder="Type your message..." /></div>
              <Button type="submit" size="lg" className="bg-gradient-brand shadow-glow">Send message</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border shadow-soft">
        <iframe title="Sparkle Car Wash location" src={businessInfo.mapEmbed} className="h-[420px] w-full" loading="lazy" />
      </div>
    </div>
  );
}

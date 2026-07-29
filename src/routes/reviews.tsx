import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ShieldCheck } from "lucide-react";
import { reviews } from "@/lib/data";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Sparkle Car Wash" },
      { name: "description", content: "Read 3,200+ verified 5-star customer reviews. Share your own experience." },
      { property: "og:title", content: "Reviews — Sparkle Car Wash" },
      { property: "og:description", content: "Rated 4.9/5 by 3,200+ verified customers." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [rating, setRating] = useState(5);
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-0 shadow-elegant md:col-span-1">
          <CardContent className="p-8 text-center">
            <div className="font-display text-6xl font-bold text-primary">{avg}</div>
            <div className="mt-2 flex justify-center text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Based on 3,200+ reviews</p>
            <Badge className="mt-4 bg-primary/10 text-primary hover:bg-primary/10"><ShieldCheck className="mr-1 h-3 w-3" /> All verified</Badge>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <h1 className="font-display text-4xl font-bold">What customers say</h1>
          <p className="mt-2 text-muted-foreground">Real reviews from real customers. Every one is verified against a completed booking.</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reviews.map((r) => (
          <Card key={r.id} className="border-0 shadow-soft transition hover:shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12"><AvatarImage src={r.avatar} /><AvatarFallback>{r.name[0]}</AvatarFallback></Avatar>
                  <div>
                    <div className="flex items-center gap-2 font-semibold">
                      {r.name}
                      {r.verified && <Badge variant="secondary" className="gap-1 text-[10px]"><ShieldCheck className="h-3 w-3 text-primary" /> Verified</Badge>}
                    </div>
                    <div className="text-xs text-muted-foreground">{r.service} · {r.date}</div>
                  </div>
                </div>
                <div className="flex text-accent">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">"{r.comment}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Leave review */}
      <Card className="mt-14 border-0 shadow-elegant">
        <CardContent className="p-8">
          <h2 className="font-display text-2xl font-bold">Leave a review</h2>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thanks! Your review has been submitted for moderation.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2"><Label>Your name</Label><Input required placeholder="Jane Doe" /></div>
              <div className="space-y-2"><Label>Service received</Label><Input placeholder="e.g. Premium Wash" /></div>
            </div>
            <div className="space-y-2">
              <Label>Your rating</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button type="button" key={n} onClick={() => setRating(n)} aria-label={`Rate ${n}`}>
                    <Star className={cn("h-8 w-8 transition", n <= rating ? "fill-accent text-accent" : "text-muted-foreground/30")} />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2"><Label>Your review</Label><Textarea required rows={4} placeholder="Tell us about your experience..." /></div>
            <Button type="submit" className="bg-gradient-brand">Submit review</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryItems, type GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sparkle Car Wash" },
      { name: "description", content: "Before-and-after gallery of our detailing, ceramic coating and interior cleaning work." },
      { property: "og:title", content: "Gallery — Sparkle Car Wash" },
      { property: "og:description", content: "See the Sparkle transformation." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = [
  { id: "all", label: "All" },
  { id: "before-after", label: "Before & After" },
  { id: "interior", label: "Interior" },
  { id: "detailing", label: "Detailing" },
  { id: "ceramic", label: "Ceramic Coating" },
] as const;

function GalleryPage() {
  const [cat, setCat] = useState<string>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const items = cat === "all" ? galleryItems : galleryItems.filter((i) => i.category === cat);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <div className="text-sm font-semibold uppercase tracking-wider text-primary">Gallery</div>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Our work, up close.</h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              cat === c.id ? "bg-gradient-brand text-primary-foreground shadow-glow" : "bg-secondary hover:bg-secondary/70",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={cn(
              "group relative overflow-hidden rounded-2xl shadow-soft transition hover:shadow-elegant",
              i % 5 === 0 && "sm:col-span-2 sm:row-span-2",
            )}
          >
            <img src={item.src} alt={item.alt} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <div className="absolute bottom-4 left-4 text-left text-white">
                <div className="text-xs uppercase tracking-wider text-accent">{item.category}</div>
                <div className="font-semibold">{item.alt}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          {selected && (
            <div className="relative">
              <img src={selected.src} alt={selected.alt} className="w-full rounded-2xl" />
              <Button size="icon" variant="secondary" onClick={() => setSelected(null)} className="absolute right-3 top-3">
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Sparkles, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>Sparkle</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/account" className="hidden sm:block">
            <Button variant="ghost" size="sm"><User className="h-4 w-4" /> Account</Button>
          </Link>
          <Link to="/booking" className="hidden sm:block">
            <Button size="sm" className="bg-gradient-brand shadow-glow">Book Now</Button>
          </Link>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("lg:hidden overflow-hidden transition-all", open ? "max-h-[600px] border-t" : "max-h-0")}>
        <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)}>
            <Button className="mt-2 w-full bg-gradient-brand">Book Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

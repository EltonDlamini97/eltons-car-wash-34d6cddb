import { Link } from "@tanstack/react-router";
import { Sparkles, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { businessInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-gradient-hero text-white">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            Sparkle
          </Link>
          <p className="mt-4 text-sm text-white/70">
            Premium hand car wash & detailing. Your car deserves the best shine.
          </p>
          <div className="mt-4 flex gap-3 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Services</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white">Exterior Wash</Link></li>
            <li><Link to="/services" className="hover:text-white">Interior Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-white">Ceramic Coating</Link></li>
            <li><Link to="/services" className="hover:text-white">Full Detailing</Link></li>
            <li><Link to="/services" className="hover:text-white">Fleet Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Company</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/membership" className="hover:text-white">Memberships</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent" />{businessInfo.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-accent" />{businessInfo.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-accent" />{businessInfo.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Sparkle Car Wash. All rights reserved.</p>
          <p>Crafted with care in Austin, TX.</p>
        </div>
      </div>
    </footer>
  );
}

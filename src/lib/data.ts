import {
  Sparkles, Car, Droplets, Wrench, Shield, PaintBucket,
  Sofa, Lightbulb, Gem, Truck, type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  description: string;
  duration: string;
  startingPrice: number;
  featured?: boolean;
}

import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import ceramic from "@/assets/ceramic.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import hero from "@/assets/hero-car.jpg";

export const galleryImages = { exterior, interior, ceramic, beforeAfter, hero };

export const services: Service[] = [
  { id: "exterior", name: "Exterior Wash", icon: Droplets, image: exterior, description: "Foam bath, hand wash, spot-free rinse & microfiber dry.", duration: "30 min", startingPrice: 19, featured: true },
  { id: "interior", name: "Interior Cleaning", icon: Sofa, image: interior, description: "Full vacuum, dashboard detail, window polish & UV protection.", duration: "45 min", startingPrice: 29 },
  { id: "premium", name: "Premium Wash", icon: Sparkles, image: exterior, description: "Exterior + interior combo with tire shine and fragrance.", duration: "60 min", startingPrice: 49, featured: true },
  { id: "engine", name: "Engine Cleaning", icon: Wrench, image: ceramic, description: "Degrease, steam-clean and dress the engine bay safely.", duration: "40 min", startingPrice: 39 },
  { id: "wax", name: "Wax & Polish", icon: PaintBucket, image: ceramic, description: "Machine polish + carnauba wax for a mirror shine.", duration: "90 min", startingPrice: 79 },
  { id: "ceramic", name: "Ceramic Coating", icon: Shield, image: ceramic, description: "9H ceramic layer with 2-year hydrophobic protection.", duration: "5 hrs", startingPrice: 399, featured: true },
  { id: "seat", name: "Seat Shampoo", icon: Sofa, image: interior, description: "Deep-extraction shampoo for cloth and leather seats.", duration: "60 min", startingPrice: 59 },
  { id: "headlight", name: "Headlight Restoration", icon: Lightbulb, image: exterior, description: "Restore clarity, remove yellowing & UV seal.", duration: "45 min", startingPrice: 49 },
  { id: "detailing", name: "Full Detailing", icon: Gem, image: beforeAfter, description: "Showroom-grade top-to-bottom transformation.", duration: "4 hrs", startingPrice: 199 },
  { id: "fleet", name: "Fleet Services", icon: Truck, image: exterior, description: "Recurring corporate fleet cleaning with SLA.", duration: "Custom", startingPrice: 15 },
];

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  tagline: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  { id: "basic", name: "Basic Wash", price: 19, duration: "30 min", tagline: "Quick refresh", features: ["Exterior foam wash", "Wheels & tires", "Spot-free rinse", "Hand dry"] },
  { id: "standard", name: "Standard Wash", price: 39, duration: "45 min", tagline: "Everyday shine", features: ["Everything in Basic", "Interior vacuum", "Dashboard wipe", "Window cleaning", "Tire shine"], popular: true },
  { id: "premium", name: "Premium Wash", price: 69, duration: "75 min", tagline: "Deep clean", features: ["Everything in Standard", "Clay bar treatment", "Wax coat", "Leather conditioner", "Air freshener"] },
  { id: "luxury", name: "Luxury Detail", price: 199, duration: "4 hrs", tagline: "Showroom finish", features: ["Full paint decontamination", "Machine polish", "6-month sealant", "Engine bay detail", "Complimentary pickup"] },
  { id: "fleet", name: "Fleet Package", price: 15, duration: "per vehicle", tagline: "5+ vehicles", features: ["Volume pricing", "On-site service", "Monthly billing", "Dedicated account manager", "Priority scheduling"] },
];

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  color: string;
  washesPerMonth: number | "Unlimited";
  discount: string;
  perks: string[];
  popular?: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  { id: "silver", name: "Silver", price: 29, color: "from-slate-400 to-slate-600", washesPerMonth: 4, discount: "10% off add-ons", perks: ["4 exterior washes / month", "10% off all add-ons", "Free vacuum", "Loyalty points 1x"] },
  { id: "gold", name: "Gold", price: 59, color: "from-amber-400 to-amber-600", washesPerMonth: 8, discount: "20% off add-ons", perks: ["8 washes / month (mix & match)", "20% off all add-ons", "Priority booking", "Free interior wipe-down", "Loyalty points 2x"], popular: true },
  { id: "platinum", name: "Platinum", price: 99, color: "from-indigo-500 to-purple-700", washesPerMonth: "Unlimited", discount: "30% off add-ons", perks: ["Unlimited premium washes", "30% off all add-ons", "Priority VIP lane", "Monthly ceramic top-up", "Free pickup & delivery", "Loyalty points 3x"] },
];

export const membershipCompare = [
  { feature: "Monthly washes", silver: "4", gold: "8", platinum: "Unlimited" },
  { feature: "Priority booking", silver: false, gold: true, platinum: true },
  { feature: "Free vacuum", silver: true, gold: true, platinum: true },
  { feature: "Interior wipe-down", silver: false, gold: true, platinum: true },
  { feature: "Ceramic top-up", silver: false, gold: false, platinum: true },
  { feature: "Pickup & delivery", silver: false, gold: false, platinum: true },
  { feature: "Add-on discount", silver: "10%", gold: "20%", platinum: "30%" },
  { feature: "Loyalty multiplier", silver: "1x", gold: "2x", platinum: "3x" },
];

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  verified: boolean;
  service: string;
  comment: string;
}

export const reviews: Review[] = [
  { id: "1", name: "Sarah Mitchell", avatar: "https://i.pravatar.cc/120?img=47", rating: 5, date: "2 days ago", verified: true, service: "Premium Wash", comment: "My BMW looks brand new. The team was professional, on-time and paid attention to every detail. Booking online was seamless." },
  { id: "2", name: "David Chen", avatar: "https://i.pravatar.cc/120?img=12", rating: 5, date: "1 week ago", verified: true, service: "Ceramic Coating", comment: "The ceramic coating is unreal. Water just slides off. Worth every dollar and the 2-year warranty gives me peace of mind." },
  { id: "3", name: "Maria Rodriguez", avatar: "https://i.pravatar.cc/120?img=32", rating: 4, date: "2 weeks ago", verified: true, service: "Interior Cleaning", comment: "Amazing job on our family SUV. All the crumbs from the kids are gone! Only reason for 4 stars is the wait time was a bit long." },
  { id: "4", name: "James Wilson", avatar: "https://i.pravatar.cc/120?img=15", rating: 5, date: "3 weeks ago", verified: true, service: "Gold Membership", comment: "Best decision I made this year. Unlimited washes, priority lane, and the staff know me by name. Sparkle is genuinely the best in town." },
  { id: "5", name: "Priya Patel", avatar: "https://i.pravatar.cc/120?img=45", rating: 5, date: "1 month ago", verified: true, service: "Full Detailing", comment: "Transformed my 8-year-old car into showroom condition. The before/after photos they sent were incredible." },
  { id: "6", name: "Marcus Thompson", avatar: "https://i.pravatar.cc/120?img=68", rating: 5, date: "1 month ago", verified: true, service: "Fleet Services", comment: "We service our 20 delivery vans here. Reliable, punctual, transparent invoicing. Highly recommended for business." },
];

export const team = [
  { name: "Alex Rivera", role: "Founder & Master Detailer", avatar: "https://i.pravatar.cc/240?img=60", bio: "15+ years perfecting the craft of high-end automotive detailing." },
  { name: "Jordan Kim", role: "Operations Manager", avatar: "https://i.pravatar.cc/240?img=32", bio: "Keeps every appointment running like clockwork." },
  { name: "Sam Okafor", role: "Ceramic Coating Specialist", avatar: "https://i.pravatar.cc/240?img=53", bio: "Certified Gtechniq & Ceramic Pro installer." },
  { name: "Emma Laurent", role: "Customer Success", avatar: "https://i.pravatar.cc/240?img=44", bio: "Your first point of contact for a spotless experience." },
];

export const stats = [
  { label: "Cars washed", value: "45,000+" },
  { label: "5-star reviews", value: "3,200+" },
  { label: "Years of service", value: "12" },
  { label: "Team members", value: "24" },
];

export const faqs = [
  { q: "How long does a typical wash take?", a: "Our Basic wash takes about 30 minutes. Premium washes take 60–75 minutes and full detailing is a 3–4 hour appointment." },
  { q: "Do I need to book an appointment?", a: "Walk-ins are welcome for basic washes, but we strongly recommend booking online for premium services and weekends." },
  { q: "Is the ceramic coating really worth it?", a: "Yes — a professionally applied 9H ceramic layer keeps your paint protected for 2+ years, makes cleaning easier, and adds serious depth of shine." },
  { q: "Do you offer pickup and delivery?", a: "Yes, complimentary pickup and delivery is included for Luxury Detail packages and Platinum members within a 15-mile radius." },
  { q: "What payment methods do you accept?", a: "We accept all major cards, Apple Pay, Google Pay, PayPal and cash. Memberships auto-renew via card on file." },
  { q: "Can I cancel or reschedule?", a: "Absolutely — free cancellation up to 2 hours before your appointment via your account dashboard." },
];

export interface GalleryItem {
  id: string;
  src: string;
  category: "before-after" | "interior" | "detailing" | "ceramic";
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: beforeAfter, category: "before-after", alt: "Dirty vs clean car comparison" },
  { id: "g2", src: interior, category: "interior", alt: "Leather seat cleaning" },
  { id: "g3", src: ceramic, category: "ceramic", alt: "Ceramic coating application" },
  { id: "g4", src: exterior, category: "detailing", alt: "Foam bath on white SUV" },
  { id: "g5", src: hero, category: "detailing", alt: "Black sports car detailing" },
  { id: "g6", src: beforeAfter, category: "before-after", alt: "Sedan restoration" },
  { id: "g7", src: interior, category: "interior", alt: "Dashboard detailing" },
  { id: "g8", src: ceramic, category: "ceramic", alt: "Red car ceramic buff" },
  { id: "g9", src: exterior, category: "detailing", alt: "Wheel cleaning" },
];

export const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

export const vehicleTypes = ["Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Van", "Luxury / Sports"];

export const businessInfo = {
  name: "Sparkle Car Wash",
  phone: "+1 (555) 010-2024",
  email: "hello@sparklecarwash.com",
  address: "1420 Riverside Blvd, Austin, TX 78704",
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  whatsapp: "+15550102024",
  mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-97.7671%2C30.2419%2C-97.7371%2C30.2619&layer=mapnik",
};

// Admin dashboard dummy data
export const adminStats = {
  todayBookings: 42,
  monthlyRevenue: 68450,
  activeMemberships: 312,
  avgRating: 4.9,
};

export const revenueChart = [
  { month: "Jan", revenue: 42000 }, { month: "Feb", revenue: 48000 },
  { month: "Mar", revenue: 51000 }, { month: "Apr", revenue: 55000 },
  { month: "May", revenue: 60000 }, { month: "Jun", revenue: 64000 },
  { month: "Jul", revenue: 68450 },
];

export const topServicesChart = [
  { name: "Premium Wash", value: 34 },
  { name: "Ceramic", value: 22 },
  { name: "Detailing", value: 18 },
  { name: "Interior", value: 15 },
  { name: "Exterior", value: 11 },
];

export interface Booking {
  id: string;
  customer: string;
  service: string;
  vehicle: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  amount: number;
  staff?: string;
}

export const adminBookings: Booking[] = [
  { id: "BK-1042", customer: "Sarah Mitchell", service: "Premium Wash", vehicle: "BMW X5", date: "2026-07-29", time: "10:00 AM", status: "confirmed", amount: 69, staff: "Sam O." },
  { id: "BK-1043", customer: "David Chen", service: "Ceramic Coating", vehicle: "Tesla Model 3", date: "2026-07-29", time: "11:00 AM", status: "pending", amount: 399 },
  { id: "BK-1044", customer: "Maria Rodriguez", service: "Interior Cleaning", vehicle: "Toyota Highlander", date: "2026-07-29", time: "1:00 PM", status: "confirmed", amount: 29, staff: "Emma L." },
  { id: "BK-1045", customer: "James Wilson", service: "Full Detailing", vehicle: "Audi A6", date: "2026-07-30", time: "9:00 AM", status: "confirmed", amount: 199, staff: "Alex R." },
  { id: "BK-1046", customer: "Priya Patel", service: "Wax & Polish", vehicle: "Honda Civic", date: "2026-07-28", time: "3:00 PM", status: "completed", amount: 79, staff: "Jordan K." },
  { id: "BK-1047", customer: "Marcus Thompson", service: "Fleet (5 vans)", vehicle: "Fleet", date: "2026-07-27", time: "8:00 AM", status: "completed", amount: 375, staff: "Alex R." },
  { id: "BK-1048", customer: "Lena Park", service: "Headlight Restoration", vehicle: "Mazda 3", date: "2026-07-26", time: "2:00 PM", status: "cancelled", amount: 49 },
];

export const recentCustomers = [
  { name: "Sarah Mitchell", email: "sarah@example.com", visits: 24, membership: "Gold", spent: 1420 },
  { name: "David Chen", email: "d.chen@example.com", visits: 8, membership: "Platinum", spent: 2100 },
  { name: "Maria Rodriguez", email: "m.rod@example.com", visits: 12, membership: "Silver", spent: 480 },
  { name: "James Wilson", email: "james.w@example.com", visits: 36, membership: "Gold", spent: 2340 },
  { name: "Priya Patel", email: "priya.p@example.com", visits: 5, membership: "—", spent: 320 },
];

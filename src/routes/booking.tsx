import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { services, timeSlots, vehicleTypes } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Sparkle Car Wash" },
      { name: "description", content: "Book your car wash or detailing appointment online in 60 seconds. Instant confirmation." },
      { property: "og:title", content: "Book Online — Sparkle Car Wash" },
      { property: "og:description", content: "Pick a service, date and time. We handle the rest." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>();
  const [service, setService] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const [ref, setRef] = useState("");

  if (submitted) {
    return (
      <div className="container mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold">Booking confirmed!</h1>
        <p className="mt-3 text-muted-foreground">
          A confirmation email is on its way. Your reference number is <span className="font-mono font-bold text-foreground">{ref}</span>.
        </p>
        <Card className="mt-8 w-full border-0 shadow-soft">
          <CardContent className="p-6 text-left text-sm">
            <p><span className="text-muted-foreground">Service:</span> {services.find((s) => s.id === service)?.name}</p>
            <p><span className="text-muted-foreground">Date:</span> {date ? format(date, "PPP") : "—"}</p>
            <p><span className="text-muted-foreground">Time:</span> {time}</p>
          </CardContent>
        </Card>
        <div className="mt-6 flex gap-3">
          <Link to="/account"><Button variant="outline">View my bookings</Button></Link>
          <Link to="/"><Button className="bg-gradient-brand">Back to home <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Online booking</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Book your appointment</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Choose a service, date and time. Confirmed instantly.</p>
        </div>

        <Card className="mt-10 border-0 shadow-elegant">
          <CardContent className="p-6 md:p-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!service || !date || !time) {
                  toast.error("Please pick a service, date and time.");
                  return;
                }
                const r = "SPK-" + Math.floor(1000 + Math.random() * 9000);
                setRef(r);
                setSubmitted(true);
                toast.success("Appointment booked!");
              }}
              className="space-y-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" required><Input required placeholder="Jane Doe" /></Field>
                <Field label="Phone number" required><Input required type="tel" placeholder="(555) 010-2024" /></Field>
                <Field label="Email" required><Input required type="email" placeholder="jane@email.com" /></Field>
                <Field label="Registration number"><Input placeholder="ABC-1234" /></Field>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Field label="Vehicle make"><Input placeholder="Toyota" /></Field>
                <Field label="Vehicle model"><Input placeholder="Camry" /></Field>
                <Field label="Vehicle type">
                  <Select><SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                    <SelectContent>{vehicleTypes.map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Field label="Service" required>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger><SelectValue placeholder="Choose service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s.id} value={s.id}>{s.name} — from ${s.startingPrice}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>

                <Field label="Date" required>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button type="button" variant="outline" className={cn("w-full justify-start font-normal", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus disabled={{ before: new Date() }} className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </Field>

                <Field label="Time" required>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger><SelectValue placeholder="Choose time" /></SelectTrigger>
                    <SelectContent>{timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
              </div>

              <Field label="Special requests">
                <Textarea rows={3} placeholder="Anything we should know? Pet hair, allergies, drop-off notes..." />
              </Field>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-muted/60 p-4 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-accent" /> Free cancellation up to 2 hours before your appointment.
                </span>
                <Button size="lg" type="submit" className="bg-gradient-brand shadow-glow">Confirm booking <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}{required && <span className="ml-0.5 text-destructive">*</span>}</Label>
      {children}
    </div>
  );
}

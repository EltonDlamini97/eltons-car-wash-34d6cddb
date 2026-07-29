import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/$section")({
  head: ({ params }) => ({
    meta: [{ title: `${cap(params.section)} — Sparkle Admin` }, { name: "robots", content: "noindex" }],
  }),
  component: Generic,
});

function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }

function Generic() {
  const { section } = Route.useParams();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold capitalize">{section}</h1>
        <p className="text-sm text-muted-foreground">Manage {section} across your business.</p>
      </div>
      <Card className="border-0 shadow-soft">
        <CardContent className="grid place-items-center gap-3 p-16 text-center">
          <Badge variant="secondary">Coming soon</Badge>
          <p className="max-w-md text-sm text-muted-foreground">
            This section is scaffolded and ready to wire up to your backend of choice.
            All UI patterns from the Bookings page apply here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

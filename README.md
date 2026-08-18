# Sparkle Car Wash

A modern, responsive, production-ready website for a premium car wash business. Built with React, TypeScript, Tailwind CSS, and TanStack Start.

![Sparkle Car Wash](public/og-image.jpg)

## Features

- **Public Pages**: Home, Services, Pricing, Online Booking, Membership Plans, Gallery, Reviews, About Us, and Contact.
- **Customer Dashboard**: View upcoming bookings, loyalty points, and manage profile.
- **Admin Dashboard**: Analytics, booking management, customers, and payments scaffold.
- **Design System**: Premium glassmorphism UI with a blue/gold brand palette.
- **SEO**: Server-side sitemap, robots.txt, JSON-LD, and per-route metadata.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19 + SSR/SSG)
- **Router**: [TanStack Router](https://tanstack.com/router) (file-based routing)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **UI Components**: Radix UI primitives + shadcn/ui patterns
- **Charts**: Recharts
- **Date Picker**: react-day-picker
- **Icons**: Lucide React

## Design System

The brand palette uses OKLCH color tokens for perceptually uniform theming:

| Token | Hex | Usage |
| --- | --- | --- |
| `--primary` | `#1E88E5` | Links, buttons, highlights |
| `--secondary` | `#0D47A1` | Deep backgrounds, headings |
| `--accent` | `#FFC107` | CTAs, ratings, badges |
| `--background` | `#0A0F1C` | Main page background |
| `--surface` | `rgba(255,255,255,0.06)` | Glassmorphism cards |

See `src/styles.css` for the full token set and utility definitions.

## Project Structure

```text
src/
  components/        # Reusable UI components and site chrome
  lib/               # Data models, mock data, and utilities
  routes/            # TanStack file-based routes
  assets/            # Local images and brand assets
  styles.css         # Global design tokens and Tailwind imports
public/              # Static files (robots.txt, favicon, etc.)
```

Key routes:

| Route | File |
| --- | --- |
| `/` | `src/routes/index.tsx` |
| `/services` | `src/routes/services.tsx` |
| `/pricing` | `src/routes/pricing.tsx` |
| `/booking` | `src/routes/booking.tsx` |
| `/membership` | `src/routes/membership.tsx` |
| `/gallery` | `src/routes/gallery.tsx` |
| `/reviews` | `src/routes/reviews.tsx` |
| `/about` | `src/routes/about.tsx` |
| `/contact` | `src/routes/contact.tsx` |
| `/account` | `src/routes/account.tsx` |
| `/admin` | `src/routes/admin.tsx` |

## Development

### Prerequisites

- Node.js 20+ (recommended via [nvm](https://github.com/nvm-sh/nvm))
- bun or npm

### Install dependencies

```bash
bun install
# or
npm install
```

### Run the dev server

```bash
bun run dev
# or
npm run dev
```

The app runs at `http://localhost:8080`.

### Build for production

```bash
bun run build
# or
npm run build
```

## Deployment

This project is optimized for edge deployment via Lovable Cloud. To publish:

1. Open the project in the [Lovable editor](https://lovable.dev).
2. Click **Publish** in the top-right corner.
3. Lovable builds and deploys the site to a live URL.

To connect the project to GitHub for two-way sync:

1. Open the project in the Lovable editor.
2. Go to **Settings > GitHub** and connect your repository.
3. Lovable will push commits automatically and sync changes back from the repo.

## SEO

- `public/robots.txt` — allows all crawlers and points to the sitemap.
- `src/routes/sitemap[.]xml.ts` — server-side dynamic sitemap generation.
- Each route exports a `head()` object with unique title, description, Open Graph, and Twitter tags.

## License

This project is built and owned by the creator. See the repository license for usage rights.

---

Built with [Lovable](https://lovable.dev).

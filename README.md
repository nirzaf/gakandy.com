# Global Associates Kandy

Corporate website for **Global Associates**, a professional firm of Chartered Accountants based in Kandy, Sri Lanka. The firm provides accounting, auditing, tax, consulting, risk management, corporate finance, forensic services, and professional training.

**Live site:** [gakandy.com](https://gakandy.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v7 (HashRouter) |
| Animations | Framer Motion 12 |
| Backend | Supabase (forms & appointments) |
| Icons | Lucide React, React Icons |
| Package manager | pnpm 10 |
| Node.js | 22.13.0 |

---

## Architecture

### SPA Structure

Single-page application served as a static site. All routing is client-side using `HashRouter`:

| Route | Page |
|---|---|
| `/` | Home (Hero, Services, About, Values, Quote, Mission, etc.) |
| `/about` | Company overview, story, team, values, mission & vision |
| `/services` | Service categories, additional services, CTA |
| `/contact` | Contact form + appointment booking calendar |
| `/partners` | Partner profiles |
| `/training` | Training programs |
| `/thanks` | Post-submission confirmation |

### Supabase Integration

Two tables used for data submission:

- **`quadrate_contact_submissions`** — General contact form (name, email, subject, message)
- **`appointments`** — Appointment booking (name, email, phone, appointment_time)

The Supabase client is initialized in `src/lib/supabase.ts` using environment variables.

### Component Tree

```
src/
├── components/         # Reusable UI components
│   ├── about/          # About page sections
│   ├── contact/        # Appointment calendar
│   ├── home/           # Homepage-specific sections
│   ├── layout/         # Alternative layout components
│   ├── partners/       # Partners page sections
│   ├── services/       # Services page sections
│   └── shared/         # Button, Card, Input, Container, etc.
├── pages/              # Page-level components
├── layouts/            # Layout wrappers
├── data/               # Static data (services, team members)
├── lib/                # Supabase client
├── theme/              # Color palette constants
├── types/              # TypeScript interfaces
└── utils/              # Framer Motion animation variants
```

### Styling

- Tailwind CSS v4 with `@theme` custom color palette in `src/index.css`
- Google Fonts: **Inter** (body) and **Merriweather** (headings)
- All images served via **ImageKit CDN**

### Animations

Centralized Framer Motion variants in `src/utils/animations.ts` — `fadeInUp`, `fadeIn`, `staggerContainer`, `scaleIn`, `slideInFromLeft`, `slideInFromRight`.

---

## Features

- Responsive design with mobile drawer navigation
- Orbital logo animation in navbar
- Animated hero section with gradient overlays
- Services showcase with category filtering
- Full appointment booking calendar with date/time picker
- Contact form with Supabase persistence
- Team member profiles
- Partners page
- Google Maps embed for office location
- HubSpot analytics tracking
- Toast notifications for form submissions

---

## Getting Started

### Prerequisites

- **Node.js 22.13.0** (see `.node-version`)
- **pnpm** (`npm install -g pnpm`)

### Install

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

Output goes to `dist/`.

### Preview Production Build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

---

## Deployment

This is a static SPA. Build output (`dist/`) can be deployed to any static hosting provider:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- Any web server (Nginx, Apache, etc.)

No server-side runtime is required.

---

## Credits

- Designed and developed by **Quadrate Tech Solutions**
- Built with [React](https://react.dev) + [Vite](https://vite.dev) + [Tailwind CSS](https://tailwindcss.com)
- Backend by [Supabase](https://supabase.com)

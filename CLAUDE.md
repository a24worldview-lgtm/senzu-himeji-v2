# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page-heavy Japanese marketing site for **仙豆のちから 姫路大手前通り店** — a dry head spa (ドライヘッドスパ) salon in Himeji. Next.js 15 App Router + React 19 + Tailwind v4, fully statically generated (no API routes, no database, no CMS). All user-facing copy is Japanese.

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build (produces static output)
npm start        # next start
npm run lint     # next lint
```

No test suite is configured.

## Architecture

### Content-as-code

All editorial content lives in TypeScript modules under `lib/`, not in MDX or a CMS:

- `lib/site.ts` — single source of truth for business details (address, hours, geo, coupon URL). Imported everywhere; change here and it propagates to metadata, JSON-LD, footer, etc.
- `lib/concerns.ts` — the `concerns` array drives the `/concerns/[slug]` dynamic routes. Adding a new entry here automatically:
  1. generates a static page via `generateStaticParams` in `app/concerns/[slug]/page.tsx`
  2. adds a sitemap URL via `getAllConcernSlugs()` in `app/sitemap.ts`
  3. picks up per-page metadata and Article+FAQPage JSON-LD
- `lib/notes.ts` — external note.com article index; entries appear on `/notes`. Content itself is hosted off-site.
- `lib/jsonld.ts` — builders for structured data. `generateLocalBusinessJsonLd` (HealthAndBeautyBusiness, on home page), `generateFaqJsonLd` (reused on home + each concern page), `generateConcernArticleJsonLd` (per concern).

The recruit page is split: `app/recruit/page.tsx` is a server component that exports `metadata` (including `alternates.canonical: '/recruit'`) and renders an inline `JobPosting` JSON-LD `<script>` — this does not go through `lib/jsonld.ts`. `app/recruit/RecruitClient.tsx` is the `'use client'` child that holds the hero slideshow (`useState` / `useEffect`) and GA4 `trackEvent` CTAs. When editing recruitment data (salary, dates, role), update the JSON-LD object in `page.tsx`; when editing interactive UI, edit `RecruitClient.tsx`.

### Styling

Tailwind v4 with tokens declared via `@theme` in `app/globals.css`. The palette (`senzu` sage greens, `base` deep mosses, `cream` warm text) is part of the brand and reused via utility classes like `bg-senzu`, `text-cream-dim`, `bg-base-warm`. Custom non-Tailwind classes also live in `globals.css`:

- `label-sm`, `botanical-line`, `text-glow` — editorial typography accents
- `ambient` — blurred colored blobs used as background ornaments
- `sr` / `sr.vis` — driven by the `ScrollReveal` client component via IntersectionObserver
- `cta-main`, `feat`, `tag-pill`, `acc-body` — reusable interactive styles

`app/page.tsx` additionally declares a local `C` constants object with hex duplicates of the theme colors and uses inline `style={{ background: C.card }}` for some sections — this coexists with Tailwind classes; don't be surprised by the redundancy.

### SEO details worth preserving

- `metadataBase` is set from `SITE.url` in `app/layout.tsx`; all OG images resolve against it.
- GA4 (`G-1GHH9D830V`) is loaded inline in `layout.tsx` `<head>`. The recruit page calls `window.gtag` via a local `trackEvent` helper — keep that ID in sync if it ever changes.
- `app/robots.ts` and `app/sitemap.ts` both use `SITE.url`; don't hardcode the domain.
- Concern pages render two JSON-LD blocks (Article + FAQPage). The home page renders two as well (LocalBusiness + FAQPage built from `topFaqs` inline in `app/page.tsx`).

### Page authoring rules (server-component-first)

`app/layout.tsx` declares `alternates: { canonical: '/' }` at the root, which is inherited by any page that does not override it. This means a page without its own `metadata` silently ships with `<link rel="canonical" href="https://senzu-himeji.com/" />` — Google will then collapse it into the homepage. A `'use client'` page cannot `export const metadata`, so marking a whole page `'use client'` triggers this bug. (This is exactly what happened to `/recruit` in April 2026 — it was dropped from Google for Jobs until the page was split.)

Rules for new pages:

1. **Default to a server component.** Only reach for `'use client'` when unavoidable.
2. **Isolate client needs in a child component.** If the page needs `useState`, `useEffect`, `onClick` handlers, `window.gtag`, browser APIs, etc., put those in a sibling file like `PageNameClient.tsx` and import it from the server `page.tsx`.
3. **Always `export const metadata` (or `generateMetadata`) with `alternates.canonical` pointing at the page's own path** (e.g. `canonical: '/recruit'`, not `'/'`). The leading slash is relative to `metadataBase`, which resolves to the absolute URL on `SITE.url`.
4. **Register the new route in `app/sitemap.ts`.** Static routes go in the top-level array; routes derived from `lib/concerns.ts` are picked up automatically via `getAllConcernSlugs()`.

Reference pattern: `app/recruit/page.tsx` (server: metadata + JobPosting JSON-LD) + `app/recruit/RecruitClient.tsx` (client: slideshow + GA CTAs).

### Path alias

`@/*` maps to the repo root (see `tsconfig.json`), so imports look like `@/lib/site`, `@/components/Header`. Prefer this over relative paths.

### Images

Local-only: everything under `public/images/`. `next.config.ts` enables AVIF/WebP but defines no `remotePatterns`, so any future external image host must be added there before `next/image` will load it.

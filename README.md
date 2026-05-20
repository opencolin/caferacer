# Cafe Racer

The coffee shop for gear heads — espresso pulled hard, breakfast that holds you to lunch, a bar that opens at five, and a garage in back for the bikes.

This repo is the marketing landing page. Next.js 16 App Router + Tailwind v4 + a server-action club signup form.

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Deploy

The site is set up for Vercel out of the box. Either:

- Push to GitHub and connect via the Vercel dashboard, or
- `vercel deploy` from the project root.

## Structure

- `app/page.tsx` — the landing page
- `app/menu/page.tsx` — full menu (espresso, breakfast, sandwiches, bar, garage plate)
- `app/inquire-form.tsx` — client component for the club signup form
- `app/actions.ts` — server action handling the signup (set `INQUIRY_WEBHOOK_URL` to deliver)
- `app/globals.css` — brand tokens and bespoke component styles
- `app/layout.tsx` — fonts (Anton / DM Sans / JetBrains Mono) and metadata
- `public/photo-*` — hero, garage, interior, and storefront photography

## Brand

| Token | Hex |
|---|---|
| pool | `#1b6ba0` |
| pool-light | `#4a9dc9` |
| chrome | `#f2c744` |
| beige | `#e8d9bc` |
| teal | `#0c3a4f` |
| cream | `#faf3e3` |
| ink | `#0a0a0a` |

Display type: **Anton**. Body: **DM Sans**. Meta strip: **JetBrains Mono**.

The CSS variable names (`--pool`, `--pool-light`) are inherited from the original Swim Up codebase — they're just steel-blue tokens here, not pool-specific.

## To do

- Wire `inquireMembership` server action to a real email or storage backend.
- Replace the inherited pool imagery (`photo-hero.jpg`, `photo-menu-hero.jpg`) with moto/cafe photography.
- Update `photo-storefront.png` to show the Cafe Racer signage when it exists.
- Add a real favicon and `apple-touch-icon.png`.
- Add a sitemap and `robots.txt` once the public URL is decided.

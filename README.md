# anshroshan-portfolio

Personal portfolio of Ansh Roshan — Gen AI developer. Next.js 16, Tailwind v4,
GSAP-driven cinematic UI.

The blog lives in a separate repo (`anshroshan-blog`, an Astro static site at
[blog.anshroshan.com](https://blog.anshroshan.com)); the nav links there
directly.

## Getting Started

```bash
bun install   # or npm install
bun dev       # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — routes: home, about, projects, contact
- `src/components/main/` — site sections (hero, nav, projects, footer)
- `src/components/sub/` — small motion/UI primitives
- `src/components/ui/` — shadcn-style primitives
- `src/data/` — single source of truth for projects & skills
- `scripts/to-webm.mjs` — video conversion helper for background assets

## Lint

```bash
bun run lint   # biome check --write
```

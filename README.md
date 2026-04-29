# Abdullah Waqas — Portfolio

Personal portfolio built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**. All copy and structure live in `src/data/portfolio.ts` for easy updates.

## Tech stack (recommended)

| Layer | Choice | Why |
|--------|--------|-----|
| Framework | **Next.js** | Static + server output, file-based routing, first-class **Vercel** deploys, built-in **SEO** (`metadata`, `sitemap`, `robots`). |
| Styling | **Tailwind CSS** | Fast iteration, consistent tokens, small runtime footprint. |
| Motion | **Framer Motion** | Declarative animations, `useReducedMotion`, GPU-friendly transforms. |
| CMS | **None for v1** | Your content is stable enough for a typed TS module; add **Sanity**, **Contentlayer**, or **MDX** later if you want a dashboard or many articles. |

## Getting started

```bash
cd Portflio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

Edit **`src/data/portfolio.ts`**:

- `siteMeta` — name, URLs (set `siteUrl` to your real Vercel domain for correct OG URLs)
- `hero`, `about`, `experience`, `projects`, `skills`, `education`
- `navLinks` — section anchors

Components in `src/components/` map over these arrays; add entries to scale without reworking UI.

## Deploy on Vercel (free tier)

1. Push this folder to **GitHub** / GitLab / Bitbucket.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. **Root directory**: set to `Portflio` if the repo root is the monorepo parent; otherwise leave default.
4. Framework preset **Next.js**; build command `npm run build` (default); output `.next` (default).
5. Deploy. Copy the production URL (e.g. `https://your-project.vercel.app`).
6. In `src/data/portfolio.ts`, set `siteMeta.siteUrl` to that URL and redeploy so Open Graph and sitemap use the correct domain.

Optional: add your custom domain under **Project → Settings → Domains**.

## Performance & SEO

- **Static** page by default — fast TTFB on Vercel’s edge.
- Semantic sections, `aria-*` on main landmarks, skip metadata for social cards.
- `prefers-reduced-motion` respected in CSS and via Framer’s `useReducedMotion`.
- Replace placeholder `siteUrl` before sharing links.

## Scripts

- `npm run dev` — local development  
- `npm run build` — production build  
- `npm run start` — run production build locally  
- `npm run lint` — ESLint  

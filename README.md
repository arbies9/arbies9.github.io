# Portfolio — Arbab Ansari

Personal portfolio site. Next.js (App Router) + Tailwind CSS v4.
Focus: Applied AI · AI Software Engineering · Technical Program Management.

## Run locally

> Requires Node ≥ 18.18. Your system Node was 17 — use nvm.

```bash
nvm use            # picks up .nvmrc (v22.22.2)
npm install        # only first time
npm run dev        # http://localhost:3000
```

If `npm run dev` reports the wrong Node version, run it explicitly:

```bash
~/.nvm/versions/node/v22.22.2/bin/node ./node_modules/next/dist/bin/next dev
```

## Build for production

```bash
npm run build && npm start
```

## Edit content

- Hero / sections / projects → `app/page.tsx`
- Theme tokens, animations → `app/globals.css`
- Page metadata → `app/layout.tsx`
- Links (LinkedIn, GitHub, email) → constants at the top of `app/page.tsx`

## Deploy

The simplest path is Vercel — push to GitHub and import the repo.

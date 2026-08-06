# Waseem Akhtar — Portfolio

Personal portfolio for Waseem Akhtar, Senior NetSuite Technical Consultant. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Statically exported and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a static site to `out/`. Set `GITHUB_PAGES=true` to build with the `/portfolio` base path used in production:

```bash
GITHUB_PAGES=true npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages.

Live site: https://waseemisle.github.io/portfolio/

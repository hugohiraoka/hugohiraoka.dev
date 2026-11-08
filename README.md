# Hugo Hiraoka — Portfolio

Personal portfolio for [hugohiraoka.dev](https://hugohiraoka.dev).

## Stack
- Astro (static output)
- TypeScript
- Tailwind CSS 4
- Cloudflare Pages

## Local development
```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages
Connect this GitHub repository in Cloudflare **Workers & Pages → Create → Pages → Connect to Git**.

- Production branch: `main`
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Then add `hugohiraoka.dev` as a custom domain in the Pages project's settings.

The content is an initial draft and should be reviewed before publishing.

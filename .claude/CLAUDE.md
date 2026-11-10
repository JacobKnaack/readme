# Readme Blog

## What this is

This is a blog about developer topics. It is an Astro static site that displays markdown articles as HTML pages.

## Structure

- Articles: markdown files in `src/content/articles/` (content collection defined in `src/content.config.ts`; frontmatter: `title`, `description`, `date`).
- Pages: `src/pages/index.astro` (reading list) and `src/pages/articles/[...slug].astro` (article, prev/next by date).
- Layout: `src/layouts/Base.astro` renders a sticky sidebar (home link + a `sidebar` slot) and the main content. Article pages fill the sidebar with a table of contents built from h2/h3 headings, with scroll-spy highlighting.
- Styles: `src/styles/global.css` (design tokens at the top). Code highlighting uses Shiki's `github-dark-dimmed` theme, set in `astro.config.mjs`.
- Deployed to GitHub Pages at `/readme` (see `astro.config.mjs` `base`) via `.github/workflows/deploy.yml`. Prefix internal links and image paths with the base.
- Commands: `npm run dev`, `npm run build`, `npm run preview`.

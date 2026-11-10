# readme

A public facing project for expressing developer thoughts and ideas around web development.

Built with [Astro](https://astro.build) as a static site. Articles are markdown files; styles live in `src/styles/global.css`.

## Commands

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Dev server at `http://localhost:4321/readme/`       |
| `npm run build`   | Build the site to `./dist/`                         |
| `npm run preview` | Preview the production build locally                |

## Adding an article

Add a `.md` file to `src/content/articles/` with this frontmatter:

```md
---
title: "Article title"
description: "One sentence summary shown on the reading list."
date: 2026-01-31
---
```

To label a code block with its filename, add `title` to the fence:

````md
```js title="chat.js"
console.log('hello');
```
````

In `.astro` files, use the component instead: `<CodeBlock code={source} lang="js" filename="chat.js" />`.

The filename becomes the URL slug. Images go in `public/images/articles/<article-slug>/` and are referenced as `/readme/images/articles/<article-slug>/...`.

## Deployment

Pushes to `master` deploy to GitHub Pages (`https://jacobknaack.me/readme`) via `.github/workflows/deploy.yml`. The repository's Pages source must be set to "GitHub Actions".

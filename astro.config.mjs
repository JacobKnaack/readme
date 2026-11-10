import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jacobknaack.me',
  base: '/readme',
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});

import { defineConfig } from 'astro/config';
import { CODE_THEME, codeBlock } from './src/plugins/code-block.mjs';

export default defineConfig({
  site: 'https://jacobknaack.me',
  base: '/readme',
  markdown: {
    shikiConfig: {
      theme: CODE_THEME,
      transformers: [codeBlock()],
    },
  },
});

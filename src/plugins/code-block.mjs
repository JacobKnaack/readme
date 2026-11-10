// Shared code block markup for markdown fences and the <CodeBlock> component.
//
// Markdown:   ```js title="chat.js"
// Component:  <CodeBlock code={src} lang="js" filename="chat.js" />
//
// Both produce:
// <figure class="code-block" data-language="js">
//   <figcaption class="code-block-header">
//     <span class="code-block-filename">chat.js</span>
//   </figcaption>
//   <pre class="astro-code ...">...</pre>
// </figure>
// The copy button is added by a script in Base.astro, so it only appears when it works.

export const CODE_THEME = 'github-dark-dimmed';

const TITLE_RE = /(?:title|filename)=(?:"([^"]*)"|'([^']*)'|(\S+))/;

/** Read `title="..."` (or `filename="..."`) from a code fence's meta string. */
export function filenameFromMeta(meta = '') {
  const match = meta.match(TITLE_RE);
  return match ? (match[1] ?? match[2] ?? match[3]) : undefined;
}

/**
 * Shiki transformer that wraps the highlighted <pre> in a <figure>,
 * with a filename header when one is given.
 * @param {{ filename?: string }} [options] Overrides the filename found in the meta string.
 */
export function codeBlock(options = {}) {
  return {
    name: 'readme:code-block',
    root(root) {
      const pre = root.children.find((n) => n.type === 'element' && n.tagName === 'pre');
      if (!pre) return;

      const filename = options.filename ?? filenameFromMeta(this.options.meta?.__raw);
      const lang = this.options.lang ?? 'plaintext';
      const children = [];

      if (filename) {
        children.push({
          type: 'element',
          tagName: 'figcaption',
          properties: { className: ['code-block-header'] },
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['code-block-filename'] },
              children: [{ type: 'text', value: filename }],
            },
          ],
        });
      }
      children.push(pre);

      root.children = [
        {
          type: 'element',
          tagName: 'figure',
          properties: {
            className: filename ? ['code-block', 'has-filename'] : ['code-block'],
            dataLanguage: lang,
          },
          children,
        },
      ];
    },
  };
}

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  const distHtmlPath = path.join(rootDir, 'dist', 'index.html');
  const template = fs.readFileSync(distHtmlPath, 'utf-8');

  if (!template.includes('<!--app-html-->')) {
    throw new Error('Missing <!--app-html--> placeholder in dist/index.html');
  }

  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'silent',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
    const appHtml = render();
    const finalHtml = template.replace('<!--app-html-->', appHtml);
    fs.writeFileSync(distHtmlPath, finalHtml, 'utf-8');
    console.log(`SSG prerender injected ${appHtml.length} chars into dist/index.html`);
  } finally {
    await vite.close();
  }
}

prerender();

import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const distFolder = join(
  __dirname,
  '../dist/church-website-template-basic/server'
);
const browserFolder = join(
  __dirname,
  '../dist/church-website-template-basic/browser'
);
const indexHtml = readFileSync(join(browserFolder, 'index.html'), 'utf-8');

const server = express();

// ✅ Set long-term cache for static assets (JS, CSS, etc.)
server.use(
  express.static(browserFolder, {
    maxAge: '1y',
    setHeaders: (res, path) => {
      if (path.endsWith('index.html')) {
        // 👇 Disable cache for HTML entry point
        res.setHeader('Cache-Control', 'no-store');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  })
);

// ✅ Set no-cache on dynamic SSR content
server.get('*', async (req, res, next) => {
  try {
    const { app } = await import(`${distFolder}/main.js`);

    // Set no-store for server-rendered HTML (dynamic)
    res.set('Cache-Control', 'no-store');

    return app(req, res, next);
  } catch (err) {
    console.error('[SSR] Failed to handle request:', err);

    // Set no-store on fallback HTML too
    res.set('Cache-Control', 'no-store');
    res.status(500).send(indexHtml);
  }
});

export const ssr = onRequest({ region: 'us-central1' }, server);

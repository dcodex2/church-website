import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const distFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/server'
);
const browserFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/browser'
);
const indexHtml = readFileSync(join(browserFolder, 'index.html')).toString();

let app: any;

const server = express();
server.use(express.static(browserFolder));

// Middleware that waits for SSR app to load before handling requests
server.get('*', async (req, res, next) => {
  if (!app) {
    try {
      const module = await import(`${distFolder}/main.server.mjs`);
      app = module.app || module.default?.app || module.default;
    } catch (err) {
      console.error('SSR module load failed:', err);
      return res.status(500).send(indexHtml); // fallback to index.html
    }
  }

  return app(req, res, next);
});

// Export Firebase HTTPS Function
export const ssr = onRequest({ region: 'us-central1' }, server);

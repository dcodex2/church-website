import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Needed for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
server.use(express.static(browserFolder));

server.get('*', async (req, res, next) => {
  try {
    const { app } = await import(`${distFolder}/main.server.mjs`);
    return app(req, res, next);
  } catch (err) {
    console.error('[SSR] Failed to handle request:', err);
    res.status(500).send(indexHtml);
  }
});

export const ssr = onRequest(
  { region: 'us-central1', timeoutSeconds: 60 },
  server
);

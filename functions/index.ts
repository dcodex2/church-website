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
  '/../dist/church-website-template-basic/browser'
);
const indexHtml = readFileSync(join(browserFolder, 'index.html'), 'utf-8');

const server = express();
server.use(express.static(browserFolder));

server.get('*', async (req, res, next) => {
  try {
    // Import main.js instead of main.server.mjs
    const { app } = await import(`${distFolder}/main.js`);
    return app(req, res, next);
  } catch (err) {
    console.error('[SSR] Failed to handle request:', err);
    res.status(500).send(indexHtml);
  }
});

export const ssr = onRequest({ region: 'us-central1' }, server);

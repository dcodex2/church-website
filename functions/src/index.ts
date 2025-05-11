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

let ssrHandler: express.RequestHandler;

const server = express();
server.use(express.static(browserFolder));

server.get('*', async (req, res, next) => {
  try {
    if (!ssrHandler) {
      const { app } = await import(`${distFolder}/main.server.mjs`);
      ssrHandler = app;
    }

    ssrHandler(req, res, next);
  } catch (err) {
    console.error('[SSR] Error loading handler', err);
    res.status(500).send(indexHtml);
  }
});

// ✅ Must export `onRequest` with final ready-to-go `express` app
export const ssr = onRequest({ region: 'us-central1' }, server);

import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';

// Resolve paths
const distFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/server'
);
const browserFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/browser'
);

// Express setup
const server = express();
server.use(express.static(browserFolder));

// Async wrapper to load the app and attach it to the server
async function setup() {
  const module = await import(`${distFolder}/main.server.mjs`);
  const app = module.app || module.default?.app || module.default;

  if (!app) throw new Error('SSR app export not found.');

  server.get('*', app);
}

// Kick off the async setup immediately
setup().catch((err) => {
  console.error('SSR setup failed:', err);
});

// Export the function
export const ssr = onRequest({ region: 'us-central1' }, server);

import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';

// Correct relative paths (from functions/lib)
const distFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/server'
);
const browserFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/browser'
);

// Robustly load the exported SSR Express app
const module = require(`${distFolder}/main.server.mjs`);
const app = module.app || module.default?.app || module.default;

const server = express();

server.use(express.static(browserFolder));
server.get('*', app);

export const ssr = onRequest({ region: 'us-central1' }, server);

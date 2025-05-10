import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';

// 🛠 Explicitly import the modern ES module bundle
const distFolder = join(
  process.cwd(),
  'dist/church-website-template-basic/server'
);
const app = require(`${distFolder}/main.server.mjs`).app;

const server = express();

server.use(
  express.static(
    join(process.cwd(), 'dist/church-website-template-basic/browser')
  )
);
server.get('*', app);

export const ssr = onRequest({ region: 'us-central1' }, server);

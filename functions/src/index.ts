import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import { join } from 'path';

// Correct paths relative to functions/lib
const distFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/server'
);
const browserFolder = join(
  __dirname,
  '../../dist/church-website-template-basic/browser'
);

const app = require(`${distFolder}/main.server.mjs`).app;

const server = express();

server.use(express.static(browserFolder));
server.get('*', app);

export const ssr = onRequest({ region: 'us-central1' }, server);

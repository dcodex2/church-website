import { onRequest } from 'firebase-functions/v2/https';
const express = require('express');
import { join } from 'path';

// Load the Angular Universal server bundle
const distFolder = join(process.cwd(), 'dist/server');
const app = require(`${distFolder}/main`).app;

const server = express();

// Serve static assets from the browser output
server.use(express.static(join(process.cwd(), 'dist/browser')));

// All other routes handled by Angular SSR
server.get('*', app);

// Export the SSR Cloud Function
export const ssr = onRequest({ region: 'us-central1' }, server);

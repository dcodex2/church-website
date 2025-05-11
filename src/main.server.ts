import 'zone.js/node';

import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const distFolder = join(
  process.cwd(),
  'dist/church-website-template-basic/browser'
);
const indexHtml = readFileSync(join(distFolder, 'index.html'), 'utf-8');

export const app = express();

app.get('*', async (req, res) => {
  try {
    const html = await renderApplication(
      () => bootstrapApplication(AppComponent, config),
      {
        document: indexHtml,
        url: req.originalUrl,
      }
    );

    res.status(200).send(html);
  } catch (err) {
    console.error('SSR error:', err);
    res.status(500).send('Server error');
  }
});

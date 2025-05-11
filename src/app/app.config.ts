import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
  PLATFORM_ID,
  inject,
  APP_INITIALIZER,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { isPlatformServer } from '@angular/common';
import { SsrTranslateLoader } from './ssr-translate-loader';
import { loadTranslations } from './translation.loader';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  const platformId = inject(PLATFORM_ID);
  return new SsrTranslateLoader(http, platformId);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: () => loadTranslations,
      multi: true,
      deps: [],
    },
  ],
};

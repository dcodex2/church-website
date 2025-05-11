import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export async function loadTranslations(): Promise<void> {
  const http = inject(HttpClient);
  const translate = inject(TranslateService);
  const loader = new TranslateHttpLoader(http, './assets/i18n/', '.json');

  const lang = 'en';
  const translations = await firstValueFrom(loader.getTranslation(lang));

  translate.setTranslation(lang, translations);
  translate.setDefaultLang(lang);
  translate.use(lang);
}

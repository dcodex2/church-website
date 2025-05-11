import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export async function loadTranslations(): Promise<void> {
  const http = inject(HttpClient);
  const translate = inject(TranslateService);
  const loader = new TranslateHttpLoader(http, './assets/i18n/', '.json');

  const translations = await firstValueFrom(loader.getTranslation('en'));
  translate.setTranslation('en', translations);
  translate.setDefaultLang('en');
  translate.use('en');
}

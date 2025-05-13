import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
import { environment } from './app/environments/environments';
register();
console.log(environment.firebase);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

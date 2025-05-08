import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ComponentsComponent } from './components/components/components.component';
import { CarouselsComponent } from './components/carousels/carousels.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { VideoComponent } from './components/video/video.component';
import { CalendarComponent } from './components/calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'components',
    component: ComponentsComponent,
  },
  {
    path: 'carousels',
    component: CarouselsComponent,
  },
  {
    path: 'info-cards',
    component: InfoCardsComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent,
  },
  {
    path: 'videos',
    component: VideoComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
];

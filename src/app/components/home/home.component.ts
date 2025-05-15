import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideItems } from '../../shared/components/swiper/swiper.component';
import { VideoEmbedComponent } from '../../shared/components/video-embed/video-embed.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PopupTemplateRegistryService } from '../../shared/services/popup-template-registry.service';
import { PopupService } from '../../shared/services/popup/popup.service';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperComponent } from '../../shared/components/swiper/swiper.component';
import { Store } from '@ngrx/store';
import { loadMinistries } from '../../state/ministries/ministries.actions';
import { selectMinistries } from '../../state/ministries/ministries.selector';
import { Ministries } from '../ministries/ministries.model';
import { Observable } from 'rxjs';
import { VideoCheckerComponent } from '../../shared/components/video-checker/video-checker.component';

export interface CalendarConfig {
  theme?: 'light' | 'dark';
  showFilters?: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    VideoEmbedComponent,
    ButtonComponent,
    TranslateModule,
    SwiperComponent,
    VideoCheckerComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  backgroundImg: string =
    '/assets/images/curvy-blue-wave-lines-background-presentation-backdrop.jpg';
  imageSliderArr: SlideItems[] = [
    {
      title: {
        es: 'Bienvenido a Nuestra Iglesia',
        en: 'Welcome to Our Church',
      },
      description: {
        es: 'Un lugar para pertenecer, crecer y experimentar el amor de Dios.',
        en: 'A place to belong, grow, and experience God’s love.',
      },
      coverImage:
        'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      captionPosition: 'center',
      textAlignment: 'text-center',
      titleFontClasses: 'text-5xl sm:text-6xl font-semibold',
      descriptionFontClasses: 'text-xl text-gray-200 mt-2',
      slideOpacity: '0.5',
      badge: '',
    },
    {
      title: {
        es: 'Únete a Nuestro Estudio Bíblico',
        en: 'Join Our Bible Study',
      },
      description: {
        es: 'Crece en la fe, haz preguntas y descubre la Palabra de Dios junto a otros.',
        en: 'Grow in faith, ask questions, and discover God’s Word together.',
      },
      coverImage:
        'https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'center',
      textAlignment: 'text-center',
      titleFontClasses: 'text-5xl sm:text-6xl font-semibold',
      descriptionFontClasses: 'text-xl text-gray-200 mt-2',
      slideOpacity: '0.5',
      badge: '',
    },
    {
      title: {
        es: 'Una Mano Amiga, Un Corazón Esperanzado',
        en: 'A Helping Hand, A Hopeful Heart',
      },
      description: {
        es: 'Juntos llevamos esperanza a través de la compasión y el cuidado.',
        en: 'Together, we bring hope through compassion and care.',
      },
      coverImage:
        'https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'center',
      textAlignment: 'text-center',
      titleFontClasses: 'text-5xl sm:text-6xl font-semibold',
      descriptionFontClasses: 'text-xl text-gray-200 mt-2',
      slideOpacity: '0.3',
      badge: '',
    },
  ];

  infoCards: SlideItems[] = [
    {
      title: { es: '', en: '' },
      badge: 'CONTENT_SLIDER_BADGE_NEW',
      description: { es: '', en: '' },
      coverImage:
        'https://www.auburnsda.org/wp-content/uploads/2021/12/pathfinders-banner-1024x400.jpg',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
    },
    {
      title: { es: '', en: '' },
      description: { es: '', en: '' },
      coverImage:
        'https://images.pexels.com/photos/213207/pexels-photo-213207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: { es: '', en: '' },
      description: { es: '', en: '' },
      coverImage:
        'https://images.pexels.com/photos/10831602/pexels-photo-10831602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: 'CONTENT_SLIDER_BADGE_COMING_SOON',
    },
    {
      title: { es: '', en: '' },
      description: { es: '', en: '' },
      coverImage:
        'https://images.pexels.com/photos/6069351/pexels-photo-6069351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: { es: '', en: '' },
      description: { es: '', en: '' },
      coverImage:
        'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: { es: '', en: '' },
      description: { es: '', en: '' },
      coverImage:
        'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: { es: '', en: '' },
      description: { es: '', en: '' },
      coverImage:
        'https://images.pexels.com/photos/7219011/pexels-photo-7219011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
  ];
  translateReady = false;
  ministries$: Observable<Ministries[]>;

  constructor(
    private popup: PopupService,
    private registry: PopupTemplateRegistryService,
    private store: Store
  ) {
    this.ministries$ = this.store.select(selectMinistries);
  }

  ngOnInit(): void {
    this.store.dispatch(loadMinistries());
  }

  openPrayerRequestPopup() {
    const template = this.registry.getTemplate('prayerTemplate');
    if (template) {
      this.popup.open(template, {
        name: '',
        message: '',
        close: (confirmed: boolean) => {
          if (confirmed) {
            // perform delete
          }
          this.popup.close();
        },
      });
    } else {
      console.error('Template not found.');
    }
  }
}

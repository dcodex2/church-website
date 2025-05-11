import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContentSliderComponent,
  SlideItems,
} from '../../shared/components/content-slider/content-slider.component';
import { VideoEmbedComponent } from '../../shared/components/video-embed/video-embed.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PopupTemplateRegistryService } from '../../shared/services/popup-template-registry.service';
import { PopupService } from '../../shared/services/popup/popup.service';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperComponent } from '../../shared/components/swiper/swiper.component';

export interface CalendarConfig {
  theme?: 'light' | 'dark';
  showFilters?: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContentSliderComponent,
    VideoEmbedComponent,
    ButtonComponent,
    TranslateModule,
    SwiperComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit, OnInit {
  backgroundImg: string =
    '/assets/images/curvy-blue-wave-lines-background-presentation-backdrop.jpg';
  imageSliderArr: SlideItems[] = [
    {
      title: 'HOME_EVENT_SLIDER_IMG_1_TITLE',
      description: 'HOME_EVENT_SLIDER_IMG_1_DESCRIPTION',
      url: 'https://images.unsplash.com/photo-1591204154525-f7ae12d8572f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      captionPosition: 'center',
      textAlignment: 'text-center',
      titleFontClasses: 'text-6xl font-semibold',
      descriptionFontClasses: 'text-xl text-gray-200 mt-2',
      slideOpacity: '0.5',
      badge: '',
    },
    {
      title: 'HOME_EVENT_SLIDER_IMG_2_TITLE',
      description: 'HOME_EVENT_SLIDER_IMG_2_DESCRIPTION',
      url: 'https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'center',
      textAlignment: 'text-center',
      titleFontClasses: 'text-6xl font-semibold',
      descriptionFontClasses: 'text-xl text-gray-200 mt-2',
      slideOpacity: '0.5',
      badge: '',
    },
    {
      title: 'HOME_EVENT_SLIDER_IMG_3_TITLE',
      description: 'HOME_EVENT_SLIDER_IMG_3_DESCRIPTION',
      url: 'https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'center',
      textAlignment: 'text-center',
      titleFontClasses: 'text-6xl font-semibold',
      descriptionFontClasses: 'text-xl text-gray-200 mt-2',
      slideOpacity: '0.3',
      badge: '',
    },
  ];

  infoCards: SlideItems[] = [
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_1_TITLE',
      badge: 'CONTENT_SLIDER_BADGE_NEW',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_1_DESCRIPTION',
      url: 'https://www.auburnsda.org/wp-content/uploads/2021/12/pathfinders-banner-1024x400.jpg',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
    },
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_2_TITLE',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_2_DESCRIPTION',
      url: 'https://images.pexels.com/photos/213207/pexels-photo-213207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_3_TITLE',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_3_DESCRIPTION',
      url: 'https://images.pexels.com/photos/10831602/pexels-photo-10831602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: 'CONTENT_SLIDER_BADGE_COMING_SOON',
    },
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_4_TITLE',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_4_DESCRIPTION',
      url: 'https://images.pexels.com/photos/6069351/pexels-photo-6069351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_5_TITLE',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_5_DESCRIPTION',
      url: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_6_TITLE',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_6_DESCRIPTION',
      url: 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
    {
      title: 'HOME_PAGE_DISCOVER_MINISTRY_7_TITLE',
      description: 'HOME_PAGE_DISCOVER_MINISTRY_7_DESCRIPTION',
      url: 'https://images.pexels.com/photos/7219011/pexels-photo-7219011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
      buttonRoute: '/learn-more',
      badge: '',
    },
  ];
  translateReady = false;

  constructor(
    private popup: PopupService,
    private registry: PopupTemplateRegistryService
  ) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.translateReady = true;
    //   console.log(this.translateReady);
    // }, 100);
  }
  ngAfterViewInit(): void {}

  openPrayerRequestPopup() {
    const template = this.registry.getTemplate('prayerTemplate');
    if (template) {
      this.popup.open(template, {
        name: 'Ministries!',
        message: 'Are you sure you want to delete this?',
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

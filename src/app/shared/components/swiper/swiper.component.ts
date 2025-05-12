import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../info-card/info-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from './swiper.directive';
export interface SlideItems {
  title: string;
  description: string;
  url: string;
  captionPosition?: string;
  textAlignment?: 'text-center' | 'text-left' | 'text-right';
  badge: string;
  icon?: string;
  buttonRoute?: string;
  descriptionFontClasses?: string;
  titleFontClasses?: string;
  slideOpacity?: string;
  textAnimation?: string;
}

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule, InfoCardComponent, TranslateModule, SwiperDirective],
  templateUrl: './swiper.component.html',
  animations: [
    trigger('fadeCaption', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 })),
      ]),
      transition('active => void', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slideUpCaption', [
      transition('void => active', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('zoomInCaption', [
      transition('void => active', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ Add this line
})
export class SwiperComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperEl', { static: true }) swiperEl!: ElementRef;
  @Input() items: SlideItems[] = [];
  @Input() slidesToShow: number = 1;
  @Input() sliderWrapperStyle: string = 'h-150';
  @Input() sliderheight: string = 'h-150';
  @Input() buttonDesign: string = 'circle';
  @Input() autoplay: boolean = true;
  @Input() autoplaySpeed: number = 5000;
  @Input() showCaption: boolean = true;
  @Input() defaultCaptionPosition: string = 'bottom-left';
  @Input() captionTextAlignment: 'text-center' | 'text-left' | 'text-right' =
    'text-left';
  @Input() type: 'image' | 'cards' = 'image';
  @Input() infinite: boolean = false;

  activeIndex = 0;
  captionVisible = true;
  captionAnimation: any;
  captionState: any;
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  };
  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.items);
  }

  ngAfterViewInit() {}

  get autoplayConfig(): string | null {
    return this.autoplay ? JSON.stringify({ delay: this.autoplaySpeed }) : null;
  }

  getCaptionClasses(position: string): string[] {
    const base = ['absolute', 'flex', 'w-full', 'h-full', 'px-4'];
    const map: Record<string, string[]> = {
      'top-left': ['caption-top-left'],
      'top-center': ['caption-top-center'],
      'top-right': ['caption-top-right'],
      'center-left': ['caption-center-left'],
      center: ['caption-center'],
      'center-right': ['caption-center-right'],
      'bottom-left': ['caption-bottom-left'],
      'bottom-center': ['caption-bottom-center'],
      'bottom-right': ['caption-bottom-right'],
    };
    return base.concat(map[position] || ['caption-center']);
  }

  goNext() {
    const swiper = this.swiperEl?.nativeElement.swiper;
    swiper?.slideNext();
  }

  goPrev() {
    const swiper = this.swiperEl?.nativeElement.swiper;
    swiper?.slidePrev();
  }

  slideChange(swiper: any) {
    this.activeIndex = swiper.detail[0].activeIndex;
    this.captionState = 'void';
    this.captionVisible = false;

    setTimeout(() => {
      this.captionState = 'active';
      this.captionVisible = true;
      this.cd.detectChanges();
    }, 500);
  }
}

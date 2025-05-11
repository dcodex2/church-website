import {
  AfterViewInit,
  Component,
  Input,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { animate, style, transition, trigger } from '@angular/animations';
import { InfoCardComponent } from '../info-card/info-card.component';
import { TranslateModule } from '@ngx-translate/core';

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
  textAnimation?: string; // e.g. 'fadeIn', 'zoomIn', 'slideUp', etc.
}

@Component({
  selector: 'app-content-slider',
  standalone: true,
  animations: [
    trigger('fadeCaption', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideUpCaption', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('zoomInCaption', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    InfoCardComponent,
    TranslateModule,
  ],
  styleUrl: './content-slider.component.scss',
  templateUrl: './content-slider.component.html',
})
export class ContentSliderComponent implements AfterViewInit, OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  @Input() items: SlideItems[] = [];
  @Input() slidesToShow: number = 1;
  @Input() sliderWrapperStyle: string = 'h-150';
  @Input() sliderheight: string = 'h-150';
  @Input() buttonDesign: string = 'circle';
  @Input() dots: boolean = false;
  @Input() infinite: boolean = false;
  @Input() autoplay: boolean = true;
  @Input() autoplaySpeed: number = 5000;
  @Input() showCaption: boolean = true;
  @Input() defaultCaptionPosition: string = 'bottom-left';
  @Input() captionAnimation: 'fade' | 'slide' | 'zoom' = 'slide';
  @Input() captionTextAlignment: 'text-center' | 'text-left' | 'text-right' =
    'text-left';
  @Input() type: string = 'image';
  activeIndex: number | undefined = undefined;
  previousIndex = -1;
  captionState: 'active' | 'inactive' = 'inactive';
  displaySlider: boolean = false;
  captionVisible = true;
  index: number = 0;
  isAtEnd: boolean = false;
  config: any;

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.config = {
      slidesToShow: this.slidesToShow,
      dots: this.dots && this.type === 'image',
      autoplay: false,
      autoplaySpeed: this.autoplaySpeed,
      arrows: false,
      infinite: this.infinite,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: this.type === 'image' ? this.slidesToShow : 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.activeIndex = 0;
      this.slickModal?.slickPlay();
    }, 1000);
  }
  onBeforeSlide(): void {
    this.captionVisible = false;
    this.cd.detectChanges();
  }

  onAfterSlide(index: any): void {
    this.activeIndex = index.currentSlide;
    this.index = index.currentSlide;
    this.captionVisible = true;
    this.isAtEnd = this.index >= this.items.length - this.slidesToShow;
  }

  getCaptionClasses(position: string): string[] {
    const base = ['absolute', 'flex', 'w-full', 'h-full', 'px-4'];
    const positionMap: Record<string, string[]> = {
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
    return base.concat(positionMap[position] || ['caption-center']);
  }
}

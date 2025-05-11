import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
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
  textAnimation?: string;
}

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule, InfoCardComponent, TranslateModule],
  templateUrl: './swiper.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ Add this line
})
export class SwiperComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperEl', { static: false }) swiperEl?: ElementRef;
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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.swiperEl?.nativeElement?.initialize) {
      this.swiperEl.nativeElement.initialize();
    }
    setTimeout(() => {
      this.activeIndex = 0;
      this.captionVisible = true;
      this.cd.detectChanges();
    });
  }

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
}

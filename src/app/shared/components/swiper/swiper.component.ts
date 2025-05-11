import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-swiper',
  imports: [CommonModule, TranslateModule],
  templateUrl: './swiper.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ Add this line
})
export class SwiperComponent {}

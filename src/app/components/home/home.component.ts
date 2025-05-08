import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CalendarConfig {
  theme?: 'light' | 'dark';
  showFilters?: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

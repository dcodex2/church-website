import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition duration-300 relative"
    >
      <img
        *ngIf="image"
        [src]="image"
        alt="Card Image"
        class="w-full h-48 object-cover"
      />

      <div
        *ngIf="badge"
        class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
      >
        {{ badge }}
      </div>

      <div class="p-6 text-center">
        <div class="flex flex-col items-center justify-center gap-2 mb-2">
          <ng-container *ngIf="icon">
            <i class="material-icons text-blue-500">{{ icon }}</i>
          </ng-container>
          <h2 *ngIf="title" class="text-xl font-bold text-gray-800">
            {{ title }}
          </h2>
        </div>
        <p *ngIf="description" class="text-gray-600 text-sm mb-4">
          {{ description }}
        </p>
        <a *ngIf="buttonLabel" [routerLink]="buttonRoute">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          >
            {{ buttonLabel }}
          </button>
        </a>
      </div>
    </div>
  `,
})
export class InfoCardComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() buttonLabel?: string;
  @Input() buttonRoute?: string;
  @Input() badge?: string;
  @Input() icon?: string;
}

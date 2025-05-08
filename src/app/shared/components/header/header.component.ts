// src/app/shared/header/header.component.ts

import { Component, Input, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { slideInOut, slideInOutRight, slideInOutLeft } from '../../animations/slide.animations';
@Component({
  selector: 'app-header',
  standalone: true,
  animations: [slideInOut, slideInOutRight, slideInOutLeft],
  imports: [CommonModule, NavigationComponent, RouterLink],
  template: `
    <header
      [style.backgroundColor]="backgroundColor"
      [style.color]="textColor"
      [style.fontFamily]="fontFamily"
      [ngClass]="[
        layout === 'horizontal' ? 'w-full' : 'w-full flex flex-col',
        stickyHeader ? 'sticky top-0 z-50' : '',
        borderBottom ? 'border-b border-gray-300' : '',
        boxShadow === 'light' ? 'shadow-sm' : boxShadow === 'medium' ? 'shadow-md' : boxShadow === 'strong' ? 'shadow-lg' : ''
      ].join(' ')"
      [style.paddingTop]="paddingTop"
      [style.paddingBottom]="paddingBottom"
    >
      <div
        class="max-w-7xl mx-auto w-full"
        [ngClass]="layout === 'horizontal' ? 'flex items-center justify-between p-4' : 'flex flex-col items-center gap-4 p-4'"
      >
        <a 
          class="flex items-center gap-2 cursor-pointer"
          [ngClass]="[
            logoPosition === 'right' ? 'order-last' : 'order-first',
            centerLogo ? 'justify-center w-full' : ''
          ].join(' ')" [routerLink]="'/'"
        >
          <img *ngIf="logoUrl" [ngClass]="logoStyles" [src]="logoUrl" alt="Logo" class="w-auto h-10" />
          <span class="text-lg font-bold" [style.fontSize]="titleFontSize">{{ siteTitle }}</span>
        </a>

        <div class="hidden md:block">
          <app-navigation></app-navigation>
        </div>

        <div *ngIf="showCTAButton" class="ml-4 hidden md:block">
          <button [ngStyle]="ctaButtonStyles" class="px-4 py-2 rounded font-semibold">
            {{ ctaButtonLabel }}
          </button>
        </div>

        <button class="md:hidden"   [ngClass]="drawerBtnPosition === 'right' ? 'ml-auto' : 'mr-auto'"
        (click)="toggleMobileMenu()">
          <i class="material-icons">menu</i>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div
  *ngIf="mobileMenuOpen"
  [@slideInOut]="drawerSide === 'left' ? 'in' : null"
  [@slideInOutLeft]="drawerSide === 'right' ? 'in' : null"
  class="fixed top-0 h-full w-64 bg-white shadow-lg z-50 p-4"
  [ngClass]="drawerSide === 'right' ? 'right-0' : 'left-0'"
>
        <div class="flex justify-end">
          <button (click)="toggleMobileMenu()">
            <i class="material-icons">close</i>
          </button>
        </div>
        <app-navigation [layout]="'vertical'"></app-navigation>
      </div>
    </header>
  `
})
export class HeaderComponent {
  @Input() siteTitle: string = '';
  @Input() logoUrl?: string;
  @Input() backgroundColor: string = '#ffffff';
  @Input() textColor: string = '#111827';
  @Input() fontFamily: string = 'Poppins, sans-serif';
  @Input() titleFontSize: string = '1.25rem';
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() logoPosition: 'left' | 'right' = 'left';
  @Input() paddingTop: string = '1rem';
  @Input() paddingBottom: string = '1rem';
  @Input() logoStyles?: string;

  @Input() stickyHeader: boolean = false;
  @Input() borderBottom: boolean = false;
  @Input() boxShadow: 'none' | 'light' | 'medium' | 'strong' = 'medium';
  @Input() centerLogo: boolean = false;
  @Input() showCTAButton: boolean = false;
  @Input() ctaButtonLabel: string = 'Get Started';
  @Input() ctaButtonStyles: { [key: string]: string } = {
    backgroundColor: '#3B82F6',
    color: '#ffffff'
  };

  @Input() drawerSide: 'left' | 'right' = 'left';
  @Input() drawerBtnPosition: 'left' | 'right' = 'left';
  mobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
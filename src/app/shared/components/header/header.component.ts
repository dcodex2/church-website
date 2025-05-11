// src/app/shared/header/header.component.ts

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import {
  slideInOut,
  slideInOutRight,
  slideInOutLeft,
} from '../../animations/slide.animations';
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
      class="py-4 sm:pb-0"
      [ngClass]="
        [
          layout === 'horizontal' ? 'w-full' : 'w-full flex flex-col',
          stickyHeader ? 'sticky top-0 z-50' : '',
          borderBottom ? 'border-b border-gray-300' : '',
          boxShadow === 'light'
            ? 'shadow-sm'
            : boxShadow === 'medium'
            ? 'shadow-md'
            : boxShadow === 'strong'
            ? 'shadow-lg'
            : ''
        ].join(' ')
      "
    >
      <div
        class="max-w-7xl mx-auto w-full relative"
        [ngClass]="[
          layout === 'horizontal'
            ? 'flex items-center md:justify-between justify-start px-4'
            : 'flex flex-col items-center gap-4 px-4',
          centerLogo ? 'grid !justify-center' : 'block'
        ]"
      >
        <!-- 🍔 Mobile Menu Icon -->
        <div class="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
          <button (click)="toggleMobileMenu()" class="flex items-center">
            <i class="material-icons text-2xl">menu</i>
          </button>
        </div>

        <!-- 🔰 Logo -->
        <a
          [style.height.px]="logoHeight"
          class="flex items-center gap-2 cursor-pointer w-full md:w-auto justify-center md:justify-start"
          [ngClass]="
            [
              logoPosition === 'right' ? 'order-last' : 'order-first',
              centerLogo ? '!justify-center w-full' : ''
            ].join(' ')
          "
          [routerLink]="'/'"
        >
          <img
            [style.height.px]="logoHeight"
            *ngIf="logoUrl"
            [ngClass]="logoStyles"
            [src]="logoUrl"
            alt="Logo"
            class="w-auto h-10"
          />
          <span class="text-lg font-bold" [style.fontSize]="titleFontSize">{{
            siteTitle
          }}</span>
        </a>

        <!-- 🧭 Desktop Navigation -->
        <div class="hidden md:block">
          <app-navigation></app-navigation>
        </div>

        <!-- 📢 CTA Button -->
        <div *ngIf="showCTAButton" class="ml-4 hidden md:block">
          <button
            [ngStyle]="ctaButtonStyles"
            class="px-4 py-2 rounded font-semibold"
          >
            {{ ctaButtonLabel }}
          </button>
        </div>
      </div>

      <!-- 📱 Mobile Navigation Drawer -->
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
        <app-navigation
          (onNavigationClicked)="toggleMobileMenu()"
          [layout]="'vertical'"
        ></app-navigation>
      </div>
    </header>
  `,
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
  @Input() logoHeight: number = 0;
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
    color: '#ffffff',
  };

  @Input() drawerSide: 'left' | 'right' = 'left';
  @Input() drawerBtnPosition: 'left' | 'right' = 'left';
  mobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

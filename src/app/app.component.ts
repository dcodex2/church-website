import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentUsageComponent } from './shared/components/component-usage/component-usage.component';
import { PopupTemplatesComponent } from './shared/components/popup-templates/popup-templates.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ComponentUsageComponent,
    PopupTemplatesComponent,
    FormsModule,
    CommonModule,
    FooterComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-stater-template';
  logoUrl = '/logos/dcodex-logo.png';
  headerLinks = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'About', path: '/about', icon: 'info' },
    { label: 'Services', path: '/services', icon: 'build' },
    { label: 'Contact', path: '/contact', icon: 'phone' },
  ];
  footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', path: '/blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', path: '/contact' },
        { label: 'Help Center', path: '/help' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' }
      ]
    }
  ];
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentUsageComponent } from './shared/components/component-usage/component-usage.component';
import { PopupTemplatesComponent } from './shared/components/popup-templates/popup-templates.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  FooterSection,
} from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ComponentUsageComponent,
    PopupTemplatesComponent,
    FormsModule,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'church-website-template-basic';
  logoUrl = '/logos/church-logo.png';
  footerSections: FooterSection[] = [
    {
      title: 'FOOTER_QUICK_LINK_HEADER',
      links: [
        { label: 'FOOTER_QUICK_LINK_1', path: '/blog' },
        { label: 'FOOTER_QUICK_LINK_2', path: '/blog' },
        { label: 'FOOTER_QUICK_LINK_3', path: '/contact' },
      ],
    },
    {
      title: 'FOOTER_SOCIAL_MEDIA_HEADER',
      links: [
        { label: 'FOOTER_SOCIAL_MEDIA_LINK_1' },
        { label: 'FOOTER_SOCIAL_MEDIA_LINK_2' },
        { label: 'FOOTER_SOCIAL_MEDIA_LINK_3' },
      ],
    },
    {
      title: 'FOOTER_LEGAL_HEADER',
      links: [
        { label: 'FOOTER_LEGAL_LINK_1', path: '/privacy' },
        { label: 'FOOTER_LEGAL_LINK_2', path: '/terms' },
      ],
    },
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

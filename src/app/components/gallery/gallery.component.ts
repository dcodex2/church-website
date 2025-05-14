import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { GalleryEvent } from './gallery.model';
import { forkJoin, from, Observable, of, switchMap, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  loadEventGallery,
  loadGalleryEvents,
} from '../../state/gallery.actions';
import { Store } from '@ngrx/store';
import {
  selectEventImages,
  selectGalleryEvents,
} from '../../state/gallery.selector';
@Component({
  selector: 'app-gallery',
  imports: [CommonModule, InfoCardComponent, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  eventGalleries: {
    eventId: string;
    title: { es: string; en: string };
    description: { es: string; en: string };
    coverImage: string;
    images: string[];
  }[] = [];
  @Input() eventId: string = 'kenya-2024'; // Set this to 'kenya-2024'
  lang: 'en' | 'es' = 'en';
  galleryView: 'events-gallery' | 'event-images' = 'events-gallery';
  selectedEvent?: GalleryEvent;
  events$?: Observable<GalleryEvent[]>;
  images$: Observable<string[]> = of([]);

  constructor(
    private translateService: TranslateService,
    private store: Store
  ) {
    this.events$ = this.store.select(selectGalleryEvents);
  }

  ngOnInit(): void {
    this.store.dispatch(loadGalleryEvents());

    this.translateService.onLangChange.subscribe(
      (event: { lang: 'en' | 'es' }) => {
        this.lang = event.lang;
      }
    );
  }

  loadEventImages(event: GalleryEvent) {
    this.selectedEvent = event;
    this.store.dispatch(loadEventGallery({ eventId: event.id }));
    this.galleryView = 'event-images';
    this.images$ = this.store.select(selectEventImages(event.id));
  }
}

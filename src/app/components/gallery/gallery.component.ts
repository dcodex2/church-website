import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { GalleryImage } from './gallery.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  @Input() eventId: string = 'kenya-2024'; // Set this to 'kenya-2024'
  images$!: Observable<GalleryImage[]>;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    // this.galleryService.getGalleryEvents().subscribe((res) => {
    //   console.log(res);
    // });
    // this.images$ = this.galleryService.getEventImages(this.eventId);
  }
}

import { Component } from '@angular/core';
import { VideoEmbedComponent } from '../../shared/components/video-embed/video-embed.component';

@Component({
  selector: 'app-video',
  imports: [VideoEmbedComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {}

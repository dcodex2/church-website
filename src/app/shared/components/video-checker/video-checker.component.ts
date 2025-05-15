import { Component } from '@angular/core';
import { YouTubeService } from './youtube.service';

@Component({
  selector: 'app-video-checker',
  imports: [],
  templateUrl: './video-checker.component.html',
  styleUrl: './video-checker.component.scss',
})
export class VideoCheckerComponent {
  liveVideoUrl: string | null = null;
  private intervalId: any;

  // Your event schedule
  events = [
    { day: 'Wednesday', time: '8:00pm' },
    { day: 'Friday', time: '8:00pm' },
    { day: 'Saturday', time: '10:00am' },
  ];

  constructor(private youtube: YouTubeService) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (this.liveVideoUrl) return;

      const now = new Date();
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
      const currentTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      const match = this.events.find(
        (e) =>
          e.day.toLowerCase() === currentDay.toLowerCase() &&
          this.normalize(e.time) === this.normalize(currentTime)
      );

      if (match) {
        this.youtube.checkLive().subscribe((link) => {
          if (link) {
            this.liveVideoUrl = link;
            clearInterval(this.intervalId);
            console.log('🔴 Live Now:', link);
          }
        });
      }
    }, 60000);
  }

  normalize(time: string): string {
    return time.trim().toLowerCase().replace(/\s/g, '');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}

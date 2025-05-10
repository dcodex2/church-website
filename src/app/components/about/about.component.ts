import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  leaders = [
    {
      name: 'Pastor John Ramirez',
      role: 'Lead Pastor',
      photo: '/assets/images/team/pastor-john.jpg',
    },
    {
      name: 'Maria Lopez',
      role: 'Worship Ministry Leader',
      photo: '/assets/images/team/maria-lopez.jpg',
    },
    {
      name: 'Carlos Gomez',
      role: 'Youth Pastor',
      photo: '/assets/images/team/carlos-gomez.jpg',
    },
    {
      name: 'Elena Rivera',
      role: 'Women’s Ministry Coordinator',
      photo: '/assets/images/team/elena-rivera.jpg',
    },
    {
      name: 'David Torres',
      role: 'Men’s Ministry Leader',
      photo: '/assets/images/team/david-torres.jpg',
    },
    {
      name: 'Sarah Martinez',
      role: 'Children’s Ministry Director',
      photo: '/assets/images/team/sarah-martinez.jpg',
    },
  ];
}

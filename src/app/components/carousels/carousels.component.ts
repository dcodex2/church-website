import { Component } from '@angular/core';
import { ContentSliderComponent } from '../../shared/components/content-slider/content-slider.component';
export interface SlideItems {
  name: string;
  description: string;
  url: string;
  captionPosition?: string;
  textAlignment?: 'text-center' | 'text-left' | 'text-right';
  textAnimation?: string; // e.g. 'fadeIn', 'zoomIn', 'slideUp', etc.
}
@Component({
  selector: 'app-carousels',
  imports: [ContentSliderComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss',
})
export class CarouselsComponent {
  imageSliderArr: SlideItems[] = [
    {
      name: 'Test',
      description: 'This images are just a test',
      url: 'https://coreui.io/angular/docs/assets/img/angular.jpg',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test2',
      description: 'This images are just a test2',
      url: 'https://t4.ftcdn.net/jpg/02/67/33/49/360_F_267334945_Wh5hvfnej5Th6U0VxiST66srSXoV0p6N.jpg',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test3',
      description: 'This images are just a test',
      url: 'https://media.istockphoto.com/id/1996314747/photo/woman-smelling-food-cooking-in-a-pot-on-her-kitchen-stove.jpg?s=1024x1024&w=is&k=20&c=gFK-md_-vEbbeFl4K-3clfW-0B320dhxajdP009GJZo=',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
    },
  ];

  infoCards: SlideItems[] = [
    {
      name: 'Test',
      description: 'This images are just a test',
      url: 'https://coreui.io/angular/docs/assets/img/angular.jpg',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test2',
      description: 'This images are just a test2',
      url: 'https://t4.ftcdn.net/jpg/02/67/33/49/360_F_267334945_Wh5hvfnej5Th6U0VxiST66srSXoV0p6N.jpg',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test3',
      description: 'This images are just a test',
      url: 'https://media.istockphoto.com/id/1996314747/photo/woman-smelling-food-cooking-in-a-pot-on-her-kitchen-stove.jpg?s=1024x1024&w=is&k=20&c=gFK-md_-vEbbeFl4K-3clfW-0B320dhxajdP009GJZo=',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test',
      description: 'This images are just a test',
      url: 'https://coreui.io/angular/docs/assets/img/angular.jpg',
      captionPosition: 'top-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test2',
      description: 'This images are just a test2',
      url: 'https://t4.ftcdn.net/jpg/02/67/33/49/360_F_267334945_Wh5hvfnej5Th6U0VxiST66srSXoV0p6N.jpg',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
    },
    {
      name: 'Test3',
      description: 'This images are just a test',
      url: 'https://media.istockphoto.com/id/1996314747/photo/woman-smelling-food-cooking-in-a-pot-on-her-kitchen-stove.jpg?s=1024x1024&w=is&k=20&c=gFK-md_-vEbbeFl4K-3clfW-0B320dhxajdP009GJZo=',
      captionPosition: 'bottom-left',
      textAlignment: 'text-left',
    },
  ];
}

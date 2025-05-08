import { Component } from '@angular/core';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-dropdowns',
  imports: [DropdownComponent],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {
  dropdownItems = [
    { label: 'Home', value: 'home', icon: 'home' },
    { label: 'Profile', value: 'profile', icon: 'person' },
    { label: 'Settings', value: 'settings', icon: 'settings' },
    { label: 'Logout', value: 'logout' }, // no icon
  ];

  onSelection(selected: any) {
    console.log('Selected:', selected);
  }
}

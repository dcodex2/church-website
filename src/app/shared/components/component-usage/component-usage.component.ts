import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { PopupService } from '../../services/popup/popup.service';
import { PopupTemplateRegistryService } from '../../services/popup-template-registry.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-component-usage',
  standalone: true,
  imports: [NavigationComponent, ButtonComponent],
  templateUrl: './component-usage.component.html',
  styleUrl: './component-usage.component.scss'
})
export class ComponentUsageComponent {

  constructor(private popup: PopupService,
    private registry: PopupTemplateRegistryService) { }

  openConfirm() {
    const template = this.registry.getTemplate('addMinistry');
    if (template) {
      this.popup.open(template, {
        name: 'Ministries!',
        message: 'Are you sure you want to delete this?',
        close: (confirmed: boolean) => {
          if (confirmed) {
            // perform delete
          }
          this.popup.close();
        }
      });
    } else {
      console.error('Template not found.');
    }
  }

}

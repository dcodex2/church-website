import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PopupTemplateRegistryService {
  private templates = new Map<string, TemplateRef<any>>();

  registerTemplate(name: string, template: TemplateRef<any>) {
    this.templates.set(name, template);
  }

  getTemplate(name: string): TemplateRef<any> | null {
    return this.templates.get(name) || null;
  }

  showTemplates() {
    console.log(this.templates)
  }

  clear() {
    this.templates.clear();
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  provideFunctions,
  getFunctions,
  httpsCallable,
} from '@angular/fire/functions';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const functions = getFunctions();
      const sendContactEmail = httpsCallable(functions, 'sendContactEmail');

      sendContactEmail({ name, email, message })
        .then(() => {
          alert('✅ Message sent successfully!');
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Email error:', error);
          alert('❌ Failed to send message. Please try again later.');
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}

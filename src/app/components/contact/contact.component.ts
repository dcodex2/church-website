import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  provideFunctions,
  getFunctions,
  httpsCallable,
  Functions,
} from '@angular/fire/functions';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TranslateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private functions: Functions,
    private translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    const formData = this.contactForm.value;

    const sendContactEmail = httpsCallable(this.functions, 'sendContactEmail');

    sendContactEmail(formData)
      .then(() => {
        alert('Message sent!');
        this.contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to send message.');
      });
  }
}

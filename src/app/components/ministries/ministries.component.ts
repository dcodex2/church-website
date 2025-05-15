import { Component, OnInit } from '@angular/core';
import { loadMinistries } from '../../state/ministries/ministries.actions';
import { selectMinistries } from '../../state/ministries/ministries.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ministries } from './ministries.model';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ministries',
  imports: [
    CommonModule,
    InfoCardComponent,
    TranslateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ministries.component.html',
  styleUrl: './ministries.component.scss',
})
export class MinistriesComponent implements OnInit {
  ministries$?: Observable<Ministries[]>;
  lang: 'en' | 'es' = 'en';
  selectedMinistry?: Ministries;
  interestForm!: FormGroup;

  constructor(
    private store: Store,
    private translateService: TranslateService,
    private fb: FormBuilder
  ) {
    this.ministries$ = this.store.select(selectMinistries);
  }

  ngOnInit(): void {
    this.store.dispatch(loadMinistries());
    this.interestForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      message: [''],
    });
    this.lang = (this.translateService.currentLang ||
      this.translateService.getDefaultLang()) as 'en' | 'es';

    this.translateService.onLangChange.subscribe(
      (event: { lang: 'en' | 'es' }) => {
        this.lang = event.lang;
      }
    );
  }

  onSelectedMinistry(ministry: Ministries) {
    this.selectedMinistry = ministry;
  }

  submitInterest() {
    if (this.interestForm.valid) {
      const formData = this.interestForm.value;
      console.log('Form submitted:', formData);

      // TODO: send to backend or Firebase Function for SMS notification

      this.interestForm.reset();
    } else {
      this.interestForm.markAllAsTouched();
    }
  }
}

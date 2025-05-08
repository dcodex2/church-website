import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTemplatesComponent } from './popup-templates.component';

describe('PopupTemplatesComponent', () => {
  let component: PopupTemplatesComponent;
  let fixture: ComponentFixture<PopupTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

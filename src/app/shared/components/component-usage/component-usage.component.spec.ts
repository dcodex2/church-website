import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUsageComponent } from './component-usage.component';

describe('ComponentUsageComponent', () => {
  let component: ComponentUsageComponent;
  let fixture: ComponentFixture<ComponentUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

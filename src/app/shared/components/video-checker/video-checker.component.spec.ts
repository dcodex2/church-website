import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCheckerComponent } from './video-checker.component';

describe('VideoCheckerComponent', () => {
  let component: VideoCheckerComponent;
  let fixture: ComponentFixture<VideoCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

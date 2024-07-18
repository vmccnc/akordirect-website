import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCarouselComponent } from './auto-carousel.component';

describe('AutoCarouselComponent', () => {
  let component: AutoCarouselComponent;
  let fixture: ComponentFixture<AutoCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCarouselComponent]
    });
    fixture = TestBed.createComponent(AutoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

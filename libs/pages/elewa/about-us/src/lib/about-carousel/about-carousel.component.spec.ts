import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCarouselComponent } from './about-carousel.component';

describe('AboutCarouselComponent', () => {
  let component: AboutCarouselComponent;
  let fixture: ComponentFixture<AboutCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

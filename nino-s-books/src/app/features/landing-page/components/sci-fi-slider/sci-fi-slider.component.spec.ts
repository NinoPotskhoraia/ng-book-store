import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiSliderComponent } from './sci-fi-slider.component';

describe('SciFiSliderComponent', () => {
  let component: SciFiSliderComponent;
  let fixture: ComponentFixture<SciFiSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciFiSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciFiSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

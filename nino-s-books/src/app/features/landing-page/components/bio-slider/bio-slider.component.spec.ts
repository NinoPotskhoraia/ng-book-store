import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSliderComponent } from './bio-slider.component';

describe('BioSliderComponent', () => {
  let component: BioSliderComponent;
  let fixture: ComponentFixture<BioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

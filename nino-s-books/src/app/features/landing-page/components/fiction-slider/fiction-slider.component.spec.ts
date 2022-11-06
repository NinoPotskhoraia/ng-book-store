import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionSliderComponent } from './fiction-slider.component';

describe('FictionSliderComponent', () => {
  let component: FictionSliderComponent;
  let fixture: ComponentFixture<FictionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FictionSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FictionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

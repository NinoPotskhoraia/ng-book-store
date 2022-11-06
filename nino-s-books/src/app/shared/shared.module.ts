import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgImageSliderModule],
  exports: [NgImageSliderModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CatalogeComponent } from './components/cataloge/cataloge.component';
import { FictionSliderComponent } from './components/fiction-slider/fiction-slider.component';
import { TopSliderComponent } from './components/top-slider/top-slider.component';
import { BioSliderComponent } from './components/bio-slider/bio-slider.component';
import { SciFiSliderComponent } from './components/sci-fi-slider/sci-fi-slider.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeroComponent,
    FeaturedComponent,
    CatalogeComponent,
    FictionSliderComponent,
    TopSliderComponent,
    BioSliderComponent,
    SciFiSliderComponent,
    LandingPageComponent,
    AboutComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}

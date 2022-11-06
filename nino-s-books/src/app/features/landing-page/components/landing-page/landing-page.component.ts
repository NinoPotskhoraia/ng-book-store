import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/images-slider';
import { SliderImagesService } from '../../services/slider-images.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private imageService: SliderImagesService) {}
  bannerImages: Image[] = [];
  fictionImages: Image[] = [];
  sciFiImages: Image[] = [];
  bioImages: Image[] = [];
  topImages: Image[] = [];

  ngOnInit(): void {
    this.bannerImages = this.imageService.bannerImgCollection;
    this.fictionImages = this.imageService.fictionImagesCollection;
    this.bioImages = this.imageService.bioImagesCollection;
    this.topImages = this.imageService.topImagesCollection;
    this.sciFiImages = this.imageService.sciFiImagesCollection;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/images-slider';
import { SliderImagesService } from '../../services/slider-images.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() imgCollection: Image[] = [];
  constructor() {}

  ngOnInit(): void {}
}

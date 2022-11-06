import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/images-slider';

@Component({
  selector: 'app-bio-slider',
  templateUrl: './bio-slider.component.html',
  styleUrls: ['./bio-slider.component.scss'],
})
export class BioSliderComponent implements OnInit {
  @Input() imgCollection: Image[] = [];
  constructor() {}

  ngOnInit(): void {}
}

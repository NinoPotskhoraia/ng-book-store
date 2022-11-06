import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/images-slider';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss'],
})
export class TopSliderComponent implements OnInit {
  @Input() imgCollection: Image[] = [];
  constructor() {}

  ngOnInit(): void {}
}

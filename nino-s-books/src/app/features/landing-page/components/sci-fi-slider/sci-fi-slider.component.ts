import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/images-slider';

@Component({
  selector: 'app-sci-fi-slider',
  templateUrl: './sci-fi-slider.component.html',
  styleUrls: ['./sci-fi-slider.component.scss'],
})
export class SciFiSliderComponent implements OnInit {
  @Input() imgCollection: Image[] = [];
  constructor() {}

  ngOnInit(): void {}
}

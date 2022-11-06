import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/images-slider';

@Component({
  selector: 'app-fiction-slider',
  templateUrl: './fiction-slider.component.html',
  styleUrls: ['./fiction-slider.component.scss'],
})
export class FictionSliderComponent implements OnInit {
  @Input() imgCollection: Image[] = [];
  constructor() {}

  ngOnInit(): void {}
}

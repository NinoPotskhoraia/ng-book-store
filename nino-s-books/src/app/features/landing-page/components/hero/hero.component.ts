import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imgCollection: Array<object> = [
    {
      image: 'assets/images/banners/4.jpg',
      thumbImage: 'assets/images/banners/4.jpg',
      title: '',
      alt: '',
    },

    {
      image: 'assets/images/banners/greg.jpg',
      thumbImage: 'assets/images/banners/greg.jpg',
      title: '',
      alt: '',
    },
    {
      image: 'assets/images/banners/man.jpg',
      thumbImage: 'assets/images/banners/man.jpg',
      title: '',
      alt: '',
    },
    {
      image: 'assets/images/banners/3.jpg',
      thumbImage: 'assets/images/banners/3.jpg',
      title: '',
      alt: '',
    },
    {
      image: 'assets/images/banners/hugo.jpg',
      thumbImage: 'assets/images/banners/hugo.jpg',
      title: '',
      alt: '',
    },
    {
      image: 'assets/images/banners/crap.jpg',
      thumbImage: 'assets/images/banners/crap.jpg',
      title: '',
      alt: '',
    },
    {
      image: 'assets/images/banners/prom.jpg',
      thumbImage: 'assets/images/banners/prom.jpg',
      title: '',
      alt: '',
    },
  ];
}

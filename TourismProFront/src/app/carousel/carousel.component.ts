import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = ["https://images.ctfassets.net/zfxytrk6nf7m/6lOKXwrrZmEGa2EI48OMqc/454f14824ef8dbcf8e77a8cefb2a58b2/illu.jpg?w=1280&h=560&q=90&fl=progressive&fit=fill",
            "https://images.ctfassets.net/zfxytrk6nf7m/6lOKXwrrZmEGa2EI48OMqc/454f14824ef8dbcf8e77a8cefb2a58b2/illu.jpg?w=1280&h=560&q=90&fl=progressive&fit=fill",
            "https://images.ctfassets.net/zfxytrk6nf7m/6lOKXwrrZmEGa2EI48OMqc/454f14824ef8dbcf8e77a8cefb2a58b2/illu.jpg?w=1280&h=560&q=90&fl=progressive&fit=fill"
            ]
  /* .map((n) => `https://picsum.photos/id/${n}/900/500`); */

  constructor() { }

  ngOnInit(): void {
  }

}

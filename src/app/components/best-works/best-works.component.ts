import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-best-works',
  templateUrl: './best-works.component.html',
  styleUrls: ['./best-works.component.scss']
})
export class BestWorksComponent implements OnInit {
  @ViewChild('carousel', { static: false })carousel: ElementRef;
  instances: M.Carousel;
  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit()	{
    this.instances = M.Carousel.init(this.carousel.nativeElement);

  }


}

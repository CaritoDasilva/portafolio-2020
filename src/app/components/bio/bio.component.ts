import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  @ViewChild('carousel', {static: false})carousel: ElementRef
  instances: M.Carousel;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.carousel');
      this.instances = M.Carousel.init(elems);
    });
  }

  ngAfterViewInit(): void {
    this.instances = M.Carousel.init(this.carousel.nativeElement);    
  }

}

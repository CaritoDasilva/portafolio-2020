import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-best-works',
  templateUrl: './best-works.component.html',
  styleUrls: ['./best-works.component.scss']
})
export class BestWorksComponent implements OnInit {
  instances: M.Carousel;
  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.carousel');
      this.instances = M.Carousel.init(elems);
    });
  }

}

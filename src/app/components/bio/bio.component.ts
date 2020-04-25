import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  instances: M.Carousel;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.carousel');
      this.instances = M.Carousel.init(elems);
    });
  }

}

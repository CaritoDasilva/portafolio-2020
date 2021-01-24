import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu: ElementRef
  instances2: M.FloatingActionButton;
  instances: M.Carousel
  title = 'portfolio-caro-dasilva';
  constructor() { }

  ngOnInit(): void {
    // var instances2;
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('.fixed-action-btn');
      this.instances2 = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true,
        direction: 'top'
      });
    });
  }

  ngAfterViewInit(): void {
    this.instances = M.Carousel.init(this.menu.nativeElement);
  }

}

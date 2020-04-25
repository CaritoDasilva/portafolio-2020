import { Component, OnInit  } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  instances2: M.FloatingActionButton;

  title = 'portfolio-caro-dasilva';

  ngOnInit() {
    var instances2;
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('.fixed-action-btn');
      this.instances2 = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true,
        direction: 'top'
      });
    });
  }
}

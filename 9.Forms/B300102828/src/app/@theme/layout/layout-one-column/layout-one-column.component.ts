import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Organisation Name</nb-layout-header>
      <nb-sidebar>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

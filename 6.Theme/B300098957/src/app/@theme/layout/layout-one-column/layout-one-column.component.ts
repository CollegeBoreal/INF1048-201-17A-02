import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Organisation Name</nb-layout-header>
      <nb-sidebar>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>
      <nb-layout-column class="img-bg">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <nb-layout-footer fixed>CopyLeft</nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: ['./layout-one-column.component.scss']
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

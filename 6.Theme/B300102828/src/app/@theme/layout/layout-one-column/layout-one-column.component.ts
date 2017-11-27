import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar><ng-content select="nb-menu"></ng-content></nb-sidebar>

      <nb-layout-column><ng-content select="router-outlet"></ng-content></nb-layout-column>
      <nb-layout-footer>MS Transfert</nb-layout-footer>
    </nb-layout>
    `,
  styleUrls: ['./layout-one-column.component.scss']
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

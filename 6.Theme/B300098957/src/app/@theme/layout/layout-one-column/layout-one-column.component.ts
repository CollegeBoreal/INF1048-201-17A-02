import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./layout-one-column.component.scss']
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

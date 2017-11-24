import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
    <app-layout-one-column>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-layout-one-column>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  menu: NbMenuItem[];

  constructor() { }

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }

}

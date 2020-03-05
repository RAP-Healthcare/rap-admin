import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'xa-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <xa-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </xa-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}

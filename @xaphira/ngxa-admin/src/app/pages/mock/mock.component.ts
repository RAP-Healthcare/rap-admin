import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'xa-mock',
  styleUrls: ['mock.component.scss'],
  template: `
    <xa-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </xa-one-column-layout>
  `,
})
export class MockComponent {

  menu = MENU_ITEMS;
}

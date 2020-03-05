import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'xa-not-found-mock',
  styleUrls: ['./not-found-mock.component.scss'],
  templateUrl: './not-found-mock.component.html',
})
export class NotFoundMockComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}

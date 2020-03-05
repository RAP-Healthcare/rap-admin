import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xa-page-outlet',
  styleUrls: ['./ngxa-page-outlet.component.scss'],
  templateUrl: './ngxa-page-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaPageOutletComponent {
  @Input() header: string;
  @Input() width: number = 12;
}

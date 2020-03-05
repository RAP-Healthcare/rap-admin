import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xa-error-message',
  styleUrls: ['./ngxa-error-message.component.scss'],
  templateUrl: './ngxa-error-message.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaErrorMessageComponent {
    @Input() hasErrors: boolean = false;
    @Input() errorMessages: string[] = [];
    @Input() param: any;
}

import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xa-container-outlet',
  styleUrls: ['./ngxa-container-outlet.component.scss'],
  templateUrl: './ngxa-container-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaContainerOutletComponent {
    @Input() name: string;
    @Input() label: string = '';
    @Input() colLabel: number = 3;
    @Input() colContent: number = 9;
    @Input() required: boolean = false;
    @Input() hasErrors: boolean = false;
    @Input() errorMessages: string[] = [];
    @Input() paramError: any;
    @Input() skeleton: boolean = false;
}

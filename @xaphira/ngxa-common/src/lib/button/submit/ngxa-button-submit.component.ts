import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'xa-button-submit',
  styleUrls: ['./ngxa-button-submit.component.scss'],
  templateUrl: './ngxa-button-submit.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaButtonSubmitComponent {
    @Input() formGroup: FormGroup = new FormGroup({});
    @Input() name: string;
    @Input() disabled: boolean = false;
    @Input() colLabel: number = 3;
    @Input() colButton: number = 9;
    @Input() type: 'button' | 'submit' | 'reset' = 'submit';
    @Input() status: 'primary' | 'danger' | 'warning' | 'info' = 'primary';
    @Input() skeleton: boolean = false;
    @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

    public click(event: any) {
      this.onSubmit.emit(event);
    }
}

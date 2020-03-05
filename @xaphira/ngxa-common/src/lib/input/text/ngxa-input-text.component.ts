import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';

@Component({
  selector: 'xa-input-text',
  styleUrls: ['./ngxa-input-text.component.scss'],
  templateUrl: './ngxa-input-text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaInputTextComponent extends NgxaValueAccessor<string> {
    @Input() placeholder: string;
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() minLength: number = 0;
    @Input() maxLength: number = 100;
    @Input() type: 'text' | 'password' | 'number' = 'text';

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
    }
}

import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { RadioModel } from './radio.model';

@Component({
  selector: 'xa-radio',
  styleUrls: ['./ngxa-radio.component.scss'],
  templateUrl: './ngxa-radio.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaRadioComponent extends NgxaValueAccessor<any> {
    @Input() placeholder: string;
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() data: RadioModel[];

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
    }

    onInit(): void {
      if (!this.value && this.data) this.value = this.data[0].value;
    }
}

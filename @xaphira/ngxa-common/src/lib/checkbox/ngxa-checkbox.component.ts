import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { CheckboxModel } from './checkbox.model';

@Component({
  selector: 'xa-checkbox',
  styleUrls: ['./ngxa-checkbox.component.scss'],
  templateUrl: './ngxa-checkbox.component.html',
})
export class NgxaCheckboxComponent extends NgxaValueAccessor<CheckboxModel[]> {
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() data: CheckboxModel[];

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
    }

    onCheckedChange() {
      if (!this.value) {
        this.value = this.data;
      }
      if (Array.isArray(this.value).valueOf()) {
        let isChecked: boolean = false;
        Array.from(this.value).forEach((value: CheckboxModel) => {
          if (value.selected) {
            isChecked = value.selected;
          }
        });
        if (this.required) {
          if (!isChecked) {
            this.ngControl.control.setErrors({
              'required': true,
            });
          } else {
            this.ngControl.control.setErrors(null);
          }
        }
        this.ngControl.control.markAsTouched();
        this.ngControl.control.markAsDirty();
      }
    }
}

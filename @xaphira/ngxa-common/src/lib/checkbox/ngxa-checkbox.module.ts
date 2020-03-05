import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaCheckboxComponent } from './ngxa-checkbox.component';

export const components = [
  NgxaCheckboxComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    TranslateModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbCheckboxModule,
  ],
})
export class NgxaCheckBoxModule { }

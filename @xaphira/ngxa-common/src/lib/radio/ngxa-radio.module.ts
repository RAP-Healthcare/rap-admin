import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NbRadioModule } from '@nebular/theme';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaRadioComponent } from './ngxa-radio.component';

export const components = [
  NgxaRadioComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbRadioModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaRadioModule { }

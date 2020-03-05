import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaDatePickerComponent } from './ngxa-datepicker.component';

export const components = [
  NgxaDatePickerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbMomentDateModule,
    NbDateFnsDateModule.forRoot({
      parseOptions: { awareOfUnicodeTokens: true },
      formatOptions: { awareOfUnicodeTokens: true },
    }),
    TranslateModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaDatePickerModule { }

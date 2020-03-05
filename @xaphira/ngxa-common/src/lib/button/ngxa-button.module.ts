import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaButtonSubmitComponent } from './submit/ngxa-button-submit.component';

export const components = [
  NgxaButtonSubmitComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    TranslateModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbButtonModule,
  ],
})
export class NgxaButtonModule { }

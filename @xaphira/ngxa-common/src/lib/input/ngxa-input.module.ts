import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbInputModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaInputTextComponent } from './text/ngxa-input-text.component';
import { NgxaInputCurrencyComponent } from './currency/ngxa-input-currency.component';
import { NgxaInputIconComponent } from './icon/ngxa-input-icon.component';
import { NgxaInputBaseIconComponent } from './icon/ngxa-input-base-icon.component';

export const components = [
  NgxaInputTextComponent,
  NgxaInputBaseIconComponent,
  NgxaInputIconComponent,
  NgxaInputCurrencyComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbIconModule,
    TranslateModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbInputModule,
  ],
})
export class NgxaInputModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaSelectComponent } from './ngxa-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';

export const components = [
  NgxaSelectComponent,
];

export const directives = [
  ContentSelectDirective,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
  ],
})
export class NgxaSelectModule { }

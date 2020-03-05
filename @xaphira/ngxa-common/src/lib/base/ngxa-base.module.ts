import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgxaErrorMessageComponent } from './error-message/ngxa-error-message.component';
import { NgxaPageOutletComponent } from './page-outlet/ngxa-page-outlet.component';
import { NbCardModule } from '@nebular/theme';
import { NgxaContainerOutletComponent } from './container-outlet/ngxa-container-outlet.component';
import { CurrencyMaskDirective } from './directive/currency.directive';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { NgxaToastrModule } from '../toastr/ngxa-toastr.module';
import { DragDropDirective } from './directive/drag-drop.directive';

export const components = [
  NgxaPageOutletComponent,
  NgxaContainerOutletComponent,
  NgxaErrorMessageComponent,
];

export const directives = [
  CurrencyMaskDirective,
  EqualValidator,
  NotEqualValidator,
  DragDropDirective,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NbCardModule,
    NgxaToastrModule.forRoot(),
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
    TranslateModule,
  ],
})
export class NgxaBaseModule { }

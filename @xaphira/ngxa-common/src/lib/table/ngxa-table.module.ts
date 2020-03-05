import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaInputModule } from '../input/ngxa-input.module';
import { NgxaDatatableComponent } from './ngx/ngxa-datatable.component';
import { NgxaDatatableHeaderComponent } from './ngx/header/ngxa-datatable-header.component';
import { NgxaDatatableCollapseComponent } from './ngx/header/collapse/ngxa-datatable-collapse.component';
import { NgxaDatatableBaseComponent } from './ngx/base/ngxa-datatable-base.component';
import { NgxaButtonModule } from '../button/ngxa-button.module';

export const components = [
  NgxaDatatableComponent,
  NgxaDatatableBaseComponent,
  NgxaDatatableHeaderComponent,
  NgxaDatatableCollapseComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbButtonModule,
    NbIconModule,
    NgxDatatableModule,
    NgxaBaseModule,
    NgxaInputModule,
    NgxaButtonModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaTableModule { }

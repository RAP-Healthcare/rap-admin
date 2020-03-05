import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxaTreeComponent } from './ngxa-tree.component';
import { NgxaTreeNodeComponent } from './ngxa-tree-node.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NbIconModule } from '@nebular/theme';

export const components = [
  NgxaTreeComponent,
  NgxaTreeNodeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
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
export class NgxaTreeModule {}

import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaEditorModule, NgxaBaseModule } from '@xaphira/ngxa-common';

@NgModule({
  imports: [
    NbCardModule,
    NgxaThemeModule,
    NgxaEditorModule,
    NgxaBaseModule,
    EditorsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule { }

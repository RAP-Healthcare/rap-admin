import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbIconModule } from '@nebular/theme';

import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { CommonModule } from '@angular/common';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { PageNotFoundComponent } from './404/404.component';
import { NgxaLayoutAuthModule } from '../layout/ngxa-layout-auth.module';

@NgModule({
  imports: [
    NbButtonModule,
    NbIconModule,
    CommonModule,
    NgxaThemeModule,
    NgxaLayoutAuthModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    PageNotFoundComponent,
  ],
})
export class MiscellaneousModule { }

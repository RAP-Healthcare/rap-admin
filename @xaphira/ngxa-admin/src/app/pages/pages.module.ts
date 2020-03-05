import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { DashboardModule } from '@xaphira/ngxa-mock';
import { ECommerceModule } from '@xaphira/ngxa-mock';
import { MiscellaneousModule } from '@xaphira/ngxa-auth';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { PagesComponent } from './pages.component';
import { MockRoutingModule } from './mock/mock-routing.module';

@NgModule({
  imports: [
    MockRoutingModule,
    NgxaThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}

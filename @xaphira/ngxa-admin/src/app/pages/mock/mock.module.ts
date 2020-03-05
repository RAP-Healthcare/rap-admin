import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import {
  DashboardModule,
  ECommerceModule,
  MiscellaneousMockModule,
  ExerciseModule,
} from '@xaphira/ngxa-mock';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { MockComponent } from './mock.component';
import { MockRoutingModule } from './mock-routing.module';
import { NgxaExtraModule } from '@xaphira/ngxa-extra';

@NgModule({
  imports: [
    MockRoutingModule,
    NgxaThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousMockModule,
    ExerciseModule,
    NgxaExtraModule,
  ],
  declarations: [
    MockComponent,
  ],
})
export class MockModule {
}

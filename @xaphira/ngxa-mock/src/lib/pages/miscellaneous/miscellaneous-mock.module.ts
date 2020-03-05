import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { MiscellaneousRoutingMockModule } from './miscellaneous-routing-mock.module';
import { MiscellaneousMockComponent } from './miscellaneous-mock.component';
import { NotFoundMockComponent } from './not-found/not-found-mock.component';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';

@NgModule({
  imports: [
    NgxaThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingMockModule,
  ],
  declarations: [
    MiscellaneousMockComponent,
    NotFoundMockComponent,
  ],
})
export class MiscellaneousMockModule { }

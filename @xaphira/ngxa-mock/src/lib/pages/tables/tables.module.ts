import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NgxaThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
})
export class TablesModule { }

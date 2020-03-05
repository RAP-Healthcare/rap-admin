import { NgModule } from '@angular/core';

import { NgxaCalendarModule } from './calendar/ngxa-calendar.module';
import { NgxaChartsModule } from './charts/ngxa-charts.module';
import { NgxaCheckBoxModule } from './checkbox/ngxa-checkbox.module';
import { NgxaEditorModule } from './editor/ngxa-editor.module';
import { NgxaInputModule } from './input/ngxa-input.module';
import { NgxaMapsModule } from './maps/ngxa-maps.module';
import { NgxaProgressModule } from './progress/ngxa-progress.module';
import { NgxaRadioModule } from './radio/ngxa-radio.module';
import { NgxaSelectModule } from './select/ngxa-select.module';
import { NgxaSpinnerModule } from './spinner/ngxa-spinner.module';
import { NgxaTableModule } from './table/ngxa-table.module';
import { NgxaBaseModule } from './base/ngxa-base.module';
import { NgxaDatePickerModule } from './datepicker/ngxa-datepicker.module';
import { NgxaButtonModule } from './button/ngxa-button.module';
import { NgxaImageModule } from './image/ngxa-image.module';
import { NgxaTreeModule } from './tree/ngxa-tree.module';

const modules = [
  NgxaInputModule,
  NgxaButtonModule,
  NgxaDatePickerModule,
  NgxaCheckBoxModule,
  NgxaRadioModule,
  NgxaEditorModule,
  NgxaCalendarModule,
  NgxaChartsModule,
  NgxaMapsModule,
  NgxaProgressModule,
  NgxaSelectModule,
  NgxaSpinnerModule,
  NgxaTableModule,
  NgxaBaseModule,
  NgxaImageModule,
  NgxaTreeModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class NgxaCommonModule {}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaCommonModule } from '@xaphira/ngxa-common';
import { ExerciseComponent } from './exercise.component';

const components = [
  ExerciseComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbButtonModule,
  NgxaThemeModule,
  NgxaCommonModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
})
export class ExerciseModule { }

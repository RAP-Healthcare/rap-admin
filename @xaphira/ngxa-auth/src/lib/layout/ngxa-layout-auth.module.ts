import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbLayoutModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { RouterModule } from '@angular/router';

const components = [
  AuthComponent,
  AuthBlockComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    CommonModule,
    HttpClientModule,
    NgxaThemeModule,
    RouterModule,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaLayoutAuthModule {}

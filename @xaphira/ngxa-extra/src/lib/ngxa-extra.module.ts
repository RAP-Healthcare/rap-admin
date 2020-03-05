import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbDialogModule, NbAlertModule, NbIconModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import {
  NgxaInputModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaCheckBoxModule,
  NgxaEditorModule,
  NgxaSelectModule,
} from '@xaphira/ngxa-common';
import { ChangePasswordPageComponent } from './password/change-password-page.component';
import { ExtraComponent } from './ngxa-extra.component';
import { NgxaExtraRoutingModule } from './ngxa-extra-routing.module';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';
import { DeactivatedPromptComponent } from './security/prompt/deactivated-prompt.component';
import { NgxaImageModule } from '@xaphira/ngxa-common';
import { HomePageComponent } from './home/home-page.component';

const components = [
  ExtraComponent,
  ChangePasswordPageComponent,
  DeactivatedPromptComponent,
  SecurityPageComponent,
  ProfilePageComponent,
  SettingsPageComponent,
  HomePageComponent,
];

const entry_components = [
  DeactivatedPromptComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbDialogModule.forChild(),
  NgxaThemeModule,
  NgxaInputModule,
  NgxaCheckBoxModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaEditorModule,
  NgxaSelectModule,
  NgxaImageModule,
  NgxaExtraRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ...entry_components,
  ],
})
export class NgxaExtraModule { }

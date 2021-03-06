import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { ExtraComponent } from './ngxa-extra.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';


const routes: Routes = [{
  path: '',
  component: ExtraComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: 'profile',
      component: ProfilePageComponent,
      data: {
        code: '#PROFILE-PAGE',
      },
    },
    {
      path: 'security',
      component: SecurityPageComponent,
      data: {
        code: '#SECURITY-PAGE',
      },
    },
    {
      path: 'settings',
      component: SettingsPageComponent,
      data: {
        code: '#SETTINGS-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaExtraRoutingModule {
}

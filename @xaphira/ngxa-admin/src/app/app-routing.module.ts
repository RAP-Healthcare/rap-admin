import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '@xaphira/ngxa-auth';
import { CustomPreloadingStrategy } from '@xaphira/ngxa-theme';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./pages/mock/mock.module').then(m => m.MockModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth-wrapper.module').then(m => m.AuthWrapperModule),
    data: {
      preload: true,
    },
  },
  {
    path: 'miscellaneous',
    loadChildren: () => import('./pages/miscellaneous/miscellaneous-wrapper.module')
    .then(m => m.MiscellaneousWrapperModule),
    data: {
      preload: true,
    },
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'miscellaneous/404' },
];

const config: ExtraOptions = {
  useHash: false,
  preloadingStrategy: CustomPreloadingStrategy,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

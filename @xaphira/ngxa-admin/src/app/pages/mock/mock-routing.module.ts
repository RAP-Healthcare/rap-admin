import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from '@xaphira/ngxa-extra';
import {
  DashboardComponent,
  ECommerceComponent,
  ExerciseComponent,
 } from '@xaphira/ngxa-mock';

import { MockComponent } from './mock.component';

const routes: Routes = [{
  path: '',
  component: MockComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'exercise',
      component: ExerciseComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout-wrapper.module')
        .then(m => m.LayoutWrapperModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms-wrapper.module')
        .then(m => m.FormsWrapperModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features-wrapper.module')
        .then(m => m.UiFeaturesWrapperModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays-wrapper.module')
        .then(m => m.ModalOverlaysWrapperModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components-wrapper.module')
        .then(m => m.ExtraComponentsWrapperModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps-wrapper.module')
        .then(m => m.MapsWrapperModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts-wrapper.module')
        .then(m => m.ChartsWrapperModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables-wrapper.module')
        .then(m => m.TablesWrapperModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous-mock-wrapper.module')
        .then(m => m.MiscellaneousMockWrapperModule),
    },
    {
      path: 'user',
      loadChildren: () => import('../extra/extra-wrapper.module')
        .then(m => m.ExtraWrapperModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: '/miscellaneous/404',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MockRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscellaneousMockComponent } from './miscellaneous-mock.component';
import { NotFoundMockComponent } from './not-found/not-found-mock.component';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousMockComponent,
    children: [
      {
        path: '404',
        component: NotFoundMockComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingMockModule {
}

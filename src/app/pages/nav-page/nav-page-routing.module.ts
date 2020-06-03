import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavPagePage } from './nav-page.page';

const routes: Routes = [
  {
    path: '',
    component: NavPagePage,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserPageModule),
      },
      {
        path: 'time-page',
        loadChildren: () =>
          import('../time-page/time-page.module').then(
            (m) => m.TimePagePageModule
          ),
      },
      {
        path: 'sched-page',
        loadChildren: () =>
          import('../sched-page/sched-page.module').then(
            (m) => m.SchedPagePageModule
          ),
      },
      {
        path: 'report-page',
        loadChildren: () =>
          import('../report-page/report-page.module').then(
            (m) => m.ReportPagePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavPagePageRoutingModule {}

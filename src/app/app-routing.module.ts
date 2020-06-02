import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'nav-page',
    loadChildren: () => import('./pages/nav-page/nav-page.module').then( m => m.NavPagePageModule)
  },
  {
    path: 'time-page',
    loadChildren: () => import('./pages/time-page/time-page.module').then( m => m.TimePagePageModule)
  },
  {
    path: 'sched-page',
    loadChildren: () => import('./pages/sched-page/sched-page.module').then( m => m.SchedPagePageModule)
  },
  {
    path: 'report-page',
    loadChildren: () => import('./pages/report-page/report-page.module').then( m => m.ReportPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

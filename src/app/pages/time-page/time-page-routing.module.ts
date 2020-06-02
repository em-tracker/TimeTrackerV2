import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimePagePage } from './time-page.page';

const routes: Routes = [
  {
    path: '',
    component: TimePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimePagePageRoutingModule {}

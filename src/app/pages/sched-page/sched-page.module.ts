import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedPagePageRoutingModule } from './sched-page-routing.module';

import { SchedPagePage } from './sched-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedPagePageRoutingModule
  ],
  declarations: [SchedPagePage]
})
export class SchedPagePageModule {}

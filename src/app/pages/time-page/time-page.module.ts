import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimePagePageRoutingModule } from './time-page-routing.module';

import { TimePagePage } from './time-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimePagePageRoutingModule
  ],
  declarations: [TimePagePage]
})
export class TimePagePageModule {}

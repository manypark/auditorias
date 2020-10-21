import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeralesPageRoutingModule } from './numerales-routing.module';

import { NumeralesPage } from './numerales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeralesPageRoutingModule
  ],
  declarations: [NumeralesPage]
})
export class NumeralesPageModule {}

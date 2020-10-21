import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumeralesPage } from './numerales.page';

const routes: Routes = [
  {
    path: '',
    component: NumeralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeralesPageRoutingModule {}

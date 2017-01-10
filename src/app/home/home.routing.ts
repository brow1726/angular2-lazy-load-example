import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { init } from './home.component';

const routes: Routes = [
  { path: 'home', component: init },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }

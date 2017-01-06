import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: './+about/about.module#AboutModule' },
  { path: 'something', loadChildren: './+something/something.module#SomethingModule' },
  { path: 'userProfile', loadChildren: './routes/user-profile/userProfile.module#userProfileModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }

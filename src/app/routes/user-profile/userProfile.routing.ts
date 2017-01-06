import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { userProfileComponent } from './userPofile.component';

const routes: Routes = [
    { path: '', component: userProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class userProfileRouting { }
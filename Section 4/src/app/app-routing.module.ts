import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IndexListComponent } from './index-list/index-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DestinationListComponent } from './destination-list/destination-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path:'countries', component: IndexListComponent},
  { path: 'destinations/:id', component: DestinationListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
}

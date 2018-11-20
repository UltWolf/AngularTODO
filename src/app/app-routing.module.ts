import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { HomeComponent } from './home/home.component';
import { ColumnComponent } from './column/column.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'dashboard',component:DashboardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

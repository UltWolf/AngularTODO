import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnComponent } from './column/column.component';

const routes: Routes = [
  { path: 'column', component: ColumnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

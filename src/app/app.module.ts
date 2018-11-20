import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashboardsComponent } from './dashboards/dashboards.component';
import { HomeComponent } from './home/home.component';
=======
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';
>>>>>>> 4e7ee9b1692fc23f947cb131d9720d0ae6775fc1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DashboardsComponent,
    HomeComponent
=======
    ColumnComponent,
    TaskComponent
>>>>>>> 4e7ee9b1692fc23f947cb131d9720d0ae6775fc1
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

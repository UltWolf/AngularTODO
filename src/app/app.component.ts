import { Component } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ToDoList';
}

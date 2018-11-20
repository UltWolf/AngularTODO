import { Component } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';
}

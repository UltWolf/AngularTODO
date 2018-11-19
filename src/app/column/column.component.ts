import { Component, OnInit } from "@angular/core";
import { TaskComponent } from "../task/task.component";

@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.scss"]
})
export class ColumnComponent implements OnInit {
  Column_id: number;
  Name: string;
  Tasks: TaskComponent[] ;
  constructor() {
      this.Tasks = [
        new TaskComponent('sss', 'Windstorm'),
        new TaskComponent('sss', 'Bombasto'),
        new TaskComponent('sss', 'Magneta'),
        new TaskComponent('sss', 'Tornado')
      ];
  }

  ngOnInit() {}
}

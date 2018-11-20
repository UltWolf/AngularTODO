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
  Task: TaskComponent = {
    id: 1,
    title: "UltWolf mast done",
    description: "it`s description"
  };
  Tasks: TaskComponent[];
  DoneTask: TaskComponent[];
  incrementid: number = 0;
  incrementdoneid: number=0;
  constructor() {
    this.Tasks = [];
    this.DoneTask = [];
  }

  deleteDone() {
    this.DoneTask = [];
  }
  addTodo(x) {
    if (this.Tasks.length == 0) {
      this.Tasks = [{ id: this.incrementid, title: x.title, description: x.description }];
    } else {
      this.incrementid = this.incrementid["id"] + 1;
      this.Tasks.push({ id: this.incrementid, title: x.title, description: x.description });
    }
  }
  addDone(x) {
    if (this.DoneTask.length == 0) {
      this.DoneTask = [{ id: this.incrementid, title: x.title, description: x.description }];
      for (var i = 0; i < this.Tasks.length; i++) {
        if (this.Tasks[i]["title"] == x["title"]) {
          this.Tasks.splice(i, 1);
        }
      }
    } else {
      this.incrementdoneid = this.incrementdoneid["id"] + 1;
      this.DoneTask.push({
        id: this.incrementdoneid,
        title: x["title"],
        description: x["description"]
      });
      for (var i = 0; i < this.Tasks.length; i++) {
        if (this.Tasks[i]["Title"] == x["Title"]) {
          this.Tasks.splice(i, 1);
        }
      }
    }
  }
  ngOnInit() {}
}

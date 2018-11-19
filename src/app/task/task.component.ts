import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent {
  id: number;
  title: string;
  description:string;
}

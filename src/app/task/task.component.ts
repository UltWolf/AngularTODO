import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  constructor() { }
  Title: string;
  Description: string;
  Period: Date;
  ngOnInit() {
  }

}

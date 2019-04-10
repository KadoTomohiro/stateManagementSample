import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-tab',
  templateUrl: './todo-tab.component.html',
  styleUrls: ['./todo-tab.component.css']
})
export class TodoTabComponent implements OnInit {

  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }
}

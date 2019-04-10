import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-tab-grooup',
  templateUrl: './todo-tab-grooup.component.html',
  styleUrls: ['./todo-tab-grooup.component.css']
})
export class TodoTabGrooupComponent implements OnInit {

  openCount: Observable<number>;
  closeCount: Observable<number>;
  allCount: Observable<number>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.openCount = this.todoService.count('open');
    this.closeCount = this.todoService.count('close');
    this.allCount = this.todoService.count('all');
  }

}

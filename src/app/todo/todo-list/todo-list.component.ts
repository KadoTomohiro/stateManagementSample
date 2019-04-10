import { Component, OnInit } from '@angular/core';
import {TodoRepositoryService} from '../todo-repository.service';
import {Observable} from 'rxjs';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: Observable<Todo[]>;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.list = this.todoService.fetchTodos();
  }
}

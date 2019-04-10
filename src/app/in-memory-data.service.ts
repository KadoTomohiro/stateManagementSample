import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Todo} from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todoList: Todo[] = [
      {id: 1, task: 'メール',  finished: false},
      {id: 2, task: '会議',  finished: true},
    ];
    return {todos: todoList};
  }


}

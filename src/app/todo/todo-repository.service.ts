import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  constructor(private client: HttpClient) { }

  private url = 'api/todos';

  getAll(): Observable<Todo[]> {
    return this.client.get<Todo[]>(this.url);
  }

  add(newTodo: Todo) {
    return this.client.post(this.url, newTodo);
  }

  update(todo: Todo) {
    return this.client.put(`${this.url}/${todo.id}`, todo);
  }

  delete(todo: Todo) {
    return this.client.delete(`${this.url}/${todo.id}`);
  }
}

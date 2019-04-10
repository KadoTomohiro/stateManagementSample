import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Todo, TodoType} from '../interfaces/todo';
import {TodoRepositoryService} from './todo-repository.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // このSubjectがComponentの参照するソースになる。
  // ただし、やってることはHttp経由でサーバーステートを参照しているだけで、
  // ローカルのストアの役割はほとんど持っていない。（最新値だけはキャッシュしている）
  // 実際にStore機能を持つオブジェクトかサービスかを用意して、
  // ローカルの状態を管理させるべきか？
  private store: Subject<Todo[]>;

  // 場所はここでいいのか？
  private filters = {
    open: (todo: Todo) => !todo.finished,
    close: (todo: Todo) => todo.finished,
    all: () => true
  };

  constructor(private repos: TodoRepositoryService) {
    this.store = new BehaviorSubject([]);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.repos.getAll()
      .pipe(
        switchMap((todo: Todo[]) => {
          this.store.next(todo);
          return this.store.asObservable();
        })
      );
  }

  addNewTodo(task: string): void {
    const newTodo: Todo = {
      task,
      finished: false
    };
    this.repos.add(newTodo)
      .pipe(
        switchMap(() => this.fetchTodos())
      ).subscribe();
  }

  update(todo: Todo) {
    this.repos.update(todo)
      .pipe(
        switchMap(() => this.fetchTodos())
      ).subscribe();
  }

  delete(todo: Todo) {
    this.repos.delete(todo)
      .pipe(
        switchMap(() => this.fetchTodos())
      ).subscribe();
  }

  checkTask(task: Todo, check: boolean) {
    task.finished = check;
    this.update(task);
  }

  count(type: TodoType): Observable<number> {
    return this.fetchTodos().
      pipe(
        map((list: Todo[]) => {
          return list.filter(this.filters[type]).length;
        })
    );
  }
}

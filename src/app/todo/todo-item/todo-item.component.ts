import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../todo.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  check: FormControl;
  // @Output() check = new EventEmitter<Todo>();
  // @Output() delete = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit() {
    this.check = this.fb.control(this.todo.finished);

    this.check.valueChanges.subscribe((value: boolean) => {
      this.todoService.checkTask(this.todo, value);
    });
  }

  onDelete() {
    this.todoService.delete(this.todo);
  }
}

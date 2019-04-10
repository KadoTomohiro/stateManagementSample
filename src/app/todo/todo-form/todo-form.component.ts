import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTask: FormControl;
  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit() {
    this.newTask = this.fb.control('', Validators.required);
  }

  addTask() {
    if (this.newTask.valid) {
      // Invalid処理が必要ならここに書く
      return;
    }
    this.todoService.addNewTodo(this.newTask.value);
    this.newTask.reset();
  }

}

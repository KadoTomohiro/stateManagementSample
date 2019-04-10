import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoPageComponent} from './todo/todo-page/todo-page.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterceptorService} from './interceptor.service';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoTabComponent } from './todo/todo-tab/todo-tab.component';
import { TodoTabGrooupComponent } from './todo/todo-tab-grooup/todo-tab-grooup.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoTabComponent,
    TodoTabGrooupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

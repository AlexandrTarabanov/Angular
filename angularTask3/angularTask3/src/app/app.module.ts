import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { CompletedTodoComponent } from './completed-todo/completed-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoFormComponent,
    TodoListComponent,
    CompletedTodoComponent,
    NavbarComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

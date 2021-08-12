import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateTodoFormComponent} from "./create-todo-form/create-todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {CompletedTodoComponent} from "./completed-todo/completed-todo.component";

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'create',
    component: CreateTodoFormComponent
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'completed',
    component: CompletedTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

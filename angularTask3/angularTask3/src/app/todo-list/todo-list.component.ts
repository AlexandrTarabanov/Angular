import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todoService";
import {Todo} from "../interfaces/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public activeTodos: Todo[] = [];

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.todo$().subscribe({
      next: (todosData) => {
        this.todos = todosData;
        this.activeTodos = this.todos.filter((todo) => !todo.isCompleted);
      }
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todoService";

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit {

  public todos: Todo[] = [];
  public completedTodos: Todo[] = [];

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.todo$().subscribe((res) => {
      this.todos = res;
      this.completedTodos = this.todos.filter((todo) => todo.isCompleted);
    });
  }

}

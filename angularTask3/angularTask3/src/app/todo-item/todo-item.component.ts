import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todoService";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {

  }

  public makeDone(isDone: boolean): void {
    const noneCompleted = this.todo.tasks.find((task) => !task.isDone);
    if (!noneCompleted) {
      this.todo.isChecked = true;
    }
  }

  public onMakeCompleted(): void {
    this.todoService.makeCompleted(this.todo.name);
  }

  public onTodoDeleted(): void {
    this.todoService.deleteTodo(this.todo.name);
  }

}

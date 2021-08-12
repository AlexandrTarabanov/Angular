import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todoService";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {

  }

  public makeDone(value: boolean): void {
    const nonecompleted = this.todo.tasks.find((task) => !task.isDone);
    if (!nonecompleted) {
      this.todo.isChecked = true;
    } else this.todo.isChecked = false;
  }

  public onMakeCompleted(): void {
    this.todoService.makeCompleted(this.todo.name);
  }

  public onTodoDeleted(): void {
    this.todoService.deleteTodo(this.todo.name)
  }

}

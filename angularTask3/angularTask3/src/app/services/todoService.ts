import {Injectable} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  todo$(): Observable<Todo[]> {
    return this.todoSubject.asObservable();
  }

  public createTodo(todoItem: Todo): void {
    const todos: Todo[] = this.todoSubject.getValue();
    todos.push(todoItem);
    this.todoSubject.next(todos);
  }

  public makeCompleted(todoName: string) {
    const todos: Todo[] = this.todoSubject.getValue();
    const completedTodo = todos.find((todo) => todo.name === todoName);
    if (completedTodo) {
      completedTodo.isCompleted = true;
    }
    this.todoSubject.next(todos);
  }

  public deleteTodo(todoName: string): void {
    const todos: Todo[] = this.todoSubject.getValue();
    this.todoSubject.next(todos.filter(todo => todo.name !== todoName))
  }
}

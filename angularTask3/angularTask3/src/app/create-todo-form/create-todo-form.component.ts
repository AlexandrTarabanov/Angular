import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from "@angular/forms";
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todoService";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.css']
})
export class CreateTodoFormComponent implements OnInit {

  public todoForm!: FormGroup

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(),
      tasks: new FormArray([new FormControl('', [Validators.required])])
    })
  }
  public prepareTasks(): void {
    const tasksArr = this.todoForm.value.tasks;
    const newTasksArr = tasksArr.map((task: string) => ({ isDone: false, task: task }));
    this.todoForm.value.tasks = newTasksArr;
  }
  public submit() {
    const formData = this.todoForm.value
    this.prepareTasks()
    const createdTodo = {...formData, isChecked:false, isCompleted: false}
    this.todoService.createTodo(createdTodo)
    this.todoForm.reset()
    const tasksFormArray = <FormArray>this.todoForm.controls.tasks;
    while(tasksFormArray.length>1) {
      tasksFormArray.removeAt(1)
    }

  }

  public addTask(){
    (<FormArray>this.todoForm.controls["tasks"]).push(new FormControl());
  }

  public getControls() {
    return (this.todoForm.get('tasks') as FormArray).controls;
  }

}

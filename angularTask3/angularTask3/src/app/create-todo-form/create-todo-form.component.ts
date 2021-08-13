import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../services/todoService";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.css']
})
export class CreateTodoFormComponent implements OnInit {

  public todoForm!: FormGroup;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(),
      tasks: new FormArray([new FormControl('', [Validators.required])])
    })
  }


  public backFormToInitial(): void {
    this.todoForm.reset();
    const tasksFormArray = <FormArray>this.todoForm.controls.tasks;
    while(tasksFormArray.length>1) {
      tasksFormArray.removeAt(1);
    }
  }

  public submit() {
    const formData = this.todoForm.value;
    let createdTodo = {...formData, isChecked:false, isCompleted: false};
    createdTodo.tasks = createdTodo.tasks.map((task: string) => ({isDone: false, task: task}));
    this.todoService.createTodo(createdTodo);
    this.backFormToInitial();
  }

  public addTask(){
    (<FormArray>this.todoForm.controls["tasks"]).push(new FormControl());
  }

  public getControls() {
    return (this.todoForm.get('tasks') as FormArray).controls;
  }

}

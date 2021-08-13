import {Task} from "./task";

export interface Todo {
  name: string
  description?: string
  tasks: [Task]
  isChecked: boolean
  isCompleted: boolean
}

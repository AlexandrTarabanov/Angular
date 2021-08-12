export interface Todo {
  name: string
  description?: string
  tasks: [{ isDone: boolean, task: string }]
  isChecked: boolean
  isCompleted: boolean
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

let todos = [
  { id: uuidv4(), task: 'first todo item', isActive: true },
  { id: uuidv4(), task: 'second todo item', isActive: true },
  { id: uuidv4(), task: 'third todo item', isActive: true },
  { id: uuidv4(), task: 'forth todo item', isActive: true },
];

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getAllTasks(): Observable<any[]> {
    return of(todos);
  }

  addTask(newTodo: string) {
    let todoNewItem = {
      id: uuidv4(),
      task: newTodo,
      isActive: true,
    };
    todos.push(todoNewItem);
  }

  deleteTask(id: string) {
    let index = todos.findIndex((item) => item.id === id);
    todos.splice(index, 1);
  }

  updateTask(id: string, updatedTask: string) {
    let index = todos.findIndex((item) => item.id === id);
    todos[index].task = updatedTask;
    console.log(todos);
  }
}

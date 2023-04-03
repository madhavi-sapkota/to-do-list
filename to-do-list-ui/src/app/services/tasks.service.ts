import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private todos: any[] = [];

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any[]> {
    return of(this.todos);
  }

  getAllTasksFromApi() {
    return this.http
      .get<any[]>(`${API_BASE_URL}/to-do-items`)
      .subscribe((tasks) => {
        tasks.forEach((task) => {
          if (this.todos.findIndex((item) => item.id === task.id) === -1) {
            this.todos.unshift(task);
          }
        });
      });
  }

  addTask(newTodo: string) {
    this.http
      .post(`${API_BASE_URL}/add-item`, { taskName: newTodo })
      .subscribe(() => {
        this.getAllTasksFromApi();
      });
  }

  deleteTask(id: string) {
    let index = this.todos.findIndex((item) => item.id === id);
    this.todos.splice(index, 1);
  }

  updateTask(id: string, updatedTask: string) {
    let index = this.todos.findIndex((item) => item.id === id);
    this.todos[index].task = updatedTask;
  }
}

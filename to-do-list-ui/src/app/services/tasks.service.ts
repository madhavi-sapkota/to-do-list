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

  getTaskById(id: string) {
    return this.todos.find((item) => item.id === id);
  }

  getAllTasksFromApi() {
    return this.http
      .get<any[]>(`${API_BASE_URL}/to-do-items`)
      .subscribe((tasks) => {
        tasks.forEach((task) => {
          this.todos.push(task);
        });
      });
  }

  addTask(newTodo: string) {
    this.http
      .post(`${API_BASE_URL}/add-item`, { taskName: newTodo })
      .subscribe((task) => {
        this.todos.unshift(task);
      });
  }

  deleteTask(id: string) {
    this.http.post(`${API_BASE_URL}/delete-item`, { id: id }).subscribe(() => {
      let index = this.todos.findIndex((task) => task.id === id);
      this.todos.splice(index, 1);
    });
  }

  updateTask(id: string, updatedTask: string) {
    this.http
      .post(`${API_BASE_URL}/update-item`, {
        id: id,
        newTaskName: updatedTask,
      })
      .subscribe(() => {
        let index = this.todos.findIndex((item) => item.id === id);
        this.todos[index].task = updatedTask;
      });
  }

  markAsComplete(id: any) {
    this.http
      .post(`${API_BASE_URL}/mark-complete`, { id: id })
      .subscribe(() => {
        let index = this.todos.findIndex((item) => item.id === id);
        this.todos[index].isActive = false;
      });
  }

  markAsActive(id: any) {
    this.http.post(`${API_BASE_URL}/mark-active`, { id: id }).subscribe(() => {
      let index = this.todos.findIndex((item) => item.id === id);
      this.todos[index].isActive = true;
    });
  }
}

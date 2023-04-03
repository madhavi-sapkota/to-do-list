import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'to-do-list-ui';
  todos: any[] = [];

  constructor(private tasksService: TasksService) {
    tasksService.getAllTasks().subscribe((todos: any[]) => {
      this.todos = todos;
    });
  }

  ngOnInit(): void {
    this.tasksService.getAllTasksFromApi();
  }

  deleteItem(id: string) {
    this.tasksService.deleteTask(id);
  }

  updateItem(id: string, target: any) {
    let updatedValue = target.value;
    this.tasksService.updateTask(id, updatedValue);
  }
}

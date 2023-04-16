import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  title = 'to-do-list-ui';
  todos: any[] = [];
  taskBeingDraggedId: any = null;
  dropZoneClass: string = '';

  constructor(private tasksService: TasksService, public dialog: MatDialog) {
    tasksService.getAllTasks().subscribe((todos: any[]) => {
      this.todos = todos;
    });
  }
  deleteAllCompleted() {
    // let allCompletedTasks = this.completedTasks;
    // for (var i = 0; i < allCompletedTasks.length; i++) {
    //   this.tasksService.deleteTask(allCompletedTasks[i].id);
    // }

    this.completedTasks.forEach((task) => {
      this.tasksService.deleteTask(task.id);
    });
  }
  completeAllTasks() {
    this.activeTasks.forEach((task) => {
      this.tasksService.markAsComplete(task.id);
    });
  }

  get activeTasks() {
    let value = this.todos.filter((x) => x.isActive);
    return value.sort(function (a, b) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
  }

  get completedTasks() {
    return this.todos.filter((x) => !x.isActive);
  }

  ngOnInit(): void {
    this.tasksService.getAllTasksFromApi();
  }

  handleDragStart(id: string) {
    this.taskBeingDraggedId = id;
  }

  handleDrop(isActive: boolean) {
    if (isActive) {
      this.tasksService.markAsActive(this.taskBeingDraggedId);
    } else {
      this.tasksService.markAsComplete(this.taskBeingDraggedId);
    }
  }

  handleDragOver(event: any) {
    this.dropZoneClass = 'drop-zone-active';
    event.preventDefault();
  }

  handleDragEnd() {
    this.dropZoneClass = '';
  }
}

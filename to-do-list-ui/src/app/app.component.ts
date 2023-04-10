import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './Mycomponents/edit-dialog/edit-dialog.component';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'to-do-list-ui';
  todos: any[] = [];
  taskBeingDraggedId: any = null;
  dropZoneClass: string = '';

  constructor(private tasksService: TasksService, public dialog: MatDialog) {
    tasksService.getAllTasks().subscribe((todos: any[]) => {
      this.todos = todos;
    });
  }
  completedTaskToBeDeleted() {
    // let allCompletedTasks = this.completedTasks;
    // for (var i = 0; i < allCompletedTasks.length; i++) {
    //   this.tasksService.deleteTask(allCompletedTasks[i].id);
    // }

    this.completedTasks.forEach((task) => {
      this.tasksService.deleteTask(task.id);
    });
  }
  allTasksToBeCompleted() {
    this.activeTasks.forEach((task) => {
      this.tasksService.markAsComplete(task.id);
    });
  }

  get activeTasks() {
    return this.todos.filter((x) => x.isActive);
  }

  get completedTasks() {
    return this.todos.filter((x) => !x.isActive);
  }

  openEditDialog(id: string): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { taskId: id },
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

  markComplete(id: any) {
    this.tasksService.markAsComplete(id);
  }

  markActive(id: any) {
    this.tasksService.markAsActive(id);
  }

  handleDragStart(id: string) {
    let item = this.todos.find((x) => x.id === id);
    this.taskBeingDraggedId = item.id;
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

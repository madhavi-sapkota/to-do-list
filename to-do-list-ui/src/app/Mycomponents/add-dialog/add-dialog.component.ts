import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent {
  taskName = '';
  dueDate: any;
  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<AddDialogComponent>
  ) {}

  addTask() {
    this.tasksService.addTask(this.taskName.trim(), this.dueDate);
    this.dialogRef.close();
  }
}

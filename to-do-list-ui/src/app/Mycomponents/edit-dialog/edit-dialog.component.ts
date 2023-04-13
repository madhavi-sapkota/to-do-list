import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

export interface EditDialogData {
  taskId: string;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent {
  taskName = '';
  dueDate: any;
  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editDialogData: EditDialogData
  ) {}

  ngOnInit(): void {
    let taskId = this.editDialogData.taskId;
    let task = this.tasksService.getTaskById(taskId);
    this.taskName = task.task;
    this.dueDate = task.dueDate;
  }
  updateTask() {
    this.tasksService.updateTask(
      this.editDialogData.taskId,
      this.taskName,
      this.dueDate
    );
    this.dialogRef.close();
  }
}

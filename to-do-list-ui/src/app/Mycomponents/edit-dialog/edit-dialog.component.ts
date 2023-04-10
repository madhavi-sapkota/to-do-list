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
  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editDialogData: EditDialogData
  ) {}

  ngOnInit(): void {
    let taskId = this.editDialogData.taskId;
    this.taskName = this.tasksService.getTaskById(taskId).task;
  }
  updateTask() {
    this.tasksService.updateTask(this.editDialogData.taskId, this.taskName);
    this.dialogRef.close();
  }
}

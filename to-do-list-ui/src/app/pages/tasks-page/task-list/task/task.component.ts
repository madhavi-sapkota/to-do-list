import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { TasksService } from '../../../../services/tasks.service';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: any;
  @Output() handleDragStarted = new EventEmitter<string>();
  @Output() handleDragEnded = new EventEmitter();

  constructor(private tasksService: TasksService, public dialog: MatDialog) {}

  handleDragStart(id: any) {
    this.handleDragStarted.emit(id);
  }

  handleDragEnd() {
    this.handleDragEnded.emit();
  }

  getCssClass() {
    let currentDate = moment(new Date()).utc(false);
    let dueDate = moment(new Date(this.task.dueDate)).utc(true);
    if (this.task.isActive) {
      if (currentDate > dueDate) {
        return 'due-date-passed';
      } else if (dueDate.diff(currentDate, 'days') <= 2) {
        return 'due-date-approaching';
      } else {
        return '';
      }
    }
    return '';
  }

  deleteItem() {
    this.tasksService.deleteTask(this.task.id);
  }

  openEditDialog(): void {
    this.dialog.open(EditDialogComponent, {
      data: { taskId: this.task.id },
    });
  }
}

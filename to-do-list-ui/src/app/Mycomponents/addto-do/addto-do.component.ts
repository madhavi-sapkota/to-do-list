import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-addto-do',
  templateUrl: './addto-do.component.html',
  styleUrls: ['./addto-do.component.css'],
})
export class AddtoDoComponent {
  taskName = '';
  constructor(private tasksService: TasksService) {}

  onClick() {
    this.tasksService.addTask(this.taskName);
    this.taskName = '';
  }
}

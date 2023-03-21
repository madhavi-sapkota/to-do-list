import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addto-do',
  templateUrl: './addto-do.component.html',
  styleUrls: ['./addto-do.component.css'],
})
export class AddtoDoComponent {
  taskName = '';
  @Output() newItemEvent = new EventEmitter();
  onClick() {
    this.newItemEvent.emit(this.taskName);
    this.taskName = '';
  }
}

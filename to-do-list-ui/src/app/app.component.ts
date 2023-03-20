import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list-ui';

  todos = [
    { id: 1, task: 'first todo item', isactive: true },
    { id: 2, task: 'second todo item', isactive: true },
    { id: 3, task: 'third todo item', isactive: true },
    { id: 4, task: 'forth todo item', isactive: true },
  ];
}

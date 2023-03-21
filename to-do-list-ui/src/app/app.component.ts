import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list-ui';
  newText = '';

  todos = [
    { id: uuidv4(), task: 'first todo item', isActive: true },
    { id: uuidv4(), task: 'second todo item', isActive: true },
    { id: uuidv4(), task: 'third todo item', isActive: true },
    { id: uuidv4(), task: 'forth todo item', isActive: true },
  ];
  addNewTodo(newTodo: any) {
    let todoNewItem = {
      id: uuidv4(),
      task: newTodo,
      isActive: true,
    };
    this.todos.push(todoNewItem);
  }

  deleteItem(id: string) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  updateItem(id: string, target: any) {
    console.log(id, target.value);
    this.newText = target.value;
    console.log(this.newText);
  }
}

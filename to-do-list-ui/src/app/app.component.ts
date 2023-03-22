import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
// import  axios  from 'axios';
// const baseURL= "http://localhost:3000/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list-ui';

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
    let index = this.todos.findIndex((item) => item.id === id);
    this.todos[index].task = target.value;

    console.log(this.todos[index]);
  }
}

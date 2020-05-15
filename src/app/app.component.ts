import { Component } from '@angular/core';

interface TODO {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputTodo = '';
  todoArray: TODO[];
  flagTodo: boolean = false;

  ngOnInit() {
    this.todoArray = [];
    this.inputTodo = '';
  }

  inputHandler(event: any) {
    this.inputTodo = event.target.value;
  }

  addButtonPressed() {
    if (this.inputTodo !== '') {
      const newItem: TODO = {
        id: Date.now(),
        todo: this.inputTodo,
      };
      console.log(newItem);
      this.todoArray.push(newItem);
      this.flagTodo = false;
      this.inputTodo = '';
      console.log(this.todoArray);
    } else {
      this.flagTodo = true;
    }
  }

  deleteTodo(id) {
    this.todoArray = this.todoArray.filter((todo) => {
      return todo.id !== id;
    });
  }
}

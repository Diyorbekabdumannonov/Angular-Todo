import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'final-project';
  todoname = ''
  todos: any = []
  localTodos: any

  constructor() { }

  ngOnInit() {
    this.localTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(this.localTodos)
    for (let i = 0; i < parsedTodos?.length; i++) {
      const el = parsedTodos[i];
      this.todos.push(el)
    }
  }

  AddTodo() {
    // if (this.todos.map((e: any) => this.todoname === e)) {
    // alert('Todo must be unique')
    // }
    // else {
    const newTodo = {
      value: this.todoname, category: 'all'
    }
    this.todos.push(newTodo)
    this.todoname = ''
    localStorage.setItem('todos', JSON.stringify(this.todos))
    // }
  }

  DeleteTodo(value: any) {
    this.localTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(this.localTodos)
    const filteredTodos = parsedTodos.filter((e: any) => e.value !== value)
    this.todos = filteredTodos
    localStorage.setItem('todos', JSON.stringify(filteredTodos))
  }

  SelectTodo(value: any) {
    this.localTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(this.localTodos)
    const filteredTodo = parsedTodos.find((e: any) => e.value === value)
    parsedTodos[parsedTodos.indexOf(filteredTodo)].category = 'done'
    localStorage.setItem('todos', JSON.stringify(parsedTodos))
  }

  showComplatedTodos() {
    this.localTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(this.localTodos)
    const filteredTodo = parsedTodos.find((e: any) => e.category === 'all')
    this.todos = filteredTodo
  }

  showAllTodos() {
    this.localTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(this.localTodos)
  }
}

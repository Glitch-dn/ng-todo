import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';


@Component({
  selector: 'app-todo-list',
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  ngOnInit(): void {
    this.todos = TODOS; //qui ci sara la richiesta AJAX
  }
}

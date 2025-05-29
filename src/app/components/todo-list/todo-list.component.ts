import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoAddComponent } from "../todo-add/todo-add.component";


@Component({
  selector: 'app-todo-list',
  imports: [TodoListItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
richiediCompletamento($event: number) {
throw new Error('Method not implemented.');
}
  todos: Todo[] = [];
  ngOnInit(): void {
    this.todos = TODOS; //qui ci sara la richiesta AJAX
  }

  completa(id:number){
    console.log(`Completamento richiesta per il todo con id: ${id}`);
    //qui ci sara l'AJAX per completare il todo
    const todoDaCompletare = this.todos.find(t => t.id === id);
    if (todoDaCompletare) {
      todoDaCompletare.completed = !todoDaCompletare.completed; //inverte lo stato di completed
    }
  }

  inserisciNuovoTodo(testo: string){
    //qui ci sarà l'AJAX per inserire un nuovo todo
    const nuovoTodo: Todo = {
      id: Math.max(...this.todos.map(t => t.id))+1, // Trova l'ID massimo esistente e incrementa di 1
      text: testo,
      completed: false
    }
    this.todos.push(nuovoTodo); // Aggiunge il nuovo todo alla lista
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-list',
  imports: [TodoListItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  //alternativa 1 per richiedere un servizio in un componente
  //constructor(private todoService: TodoService) { }

  //alternativa 2 per richiedere un servizio in un componente
  todoService: TodoService = inject(TodoService);
  
  todos: Todo[] = [];
  
  ngOnInit(): void {
    this.todos = this.todoService.getTodos(); //qui ci sara la richiesta AJAX
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

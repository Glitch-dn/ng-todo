import { Component, Input, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list-item',
  imports: [NgClass],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input()
  todo?:Todo;

  onRichiestaCompletamento = output<number>();

  richiediCompletamento() { //genero evento
    if (this.todo) {
      this.onRichiestaCompletamento.emit(this.todo.id);
    }
  }
}

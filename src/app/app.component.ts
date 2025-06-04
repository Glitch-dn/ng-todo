import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AutoListComponent } from "./components/auto-list/auto-list.component";

type Section = 'todo' | 'auto' | 'carrello'; // Definisco un tipo per le sezioni, così posso usarlo per il controllo dei tipi

@Component({
  selector: 'app-root',
  imports: [TodoListComponent, AutoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-todo';

  selectedSection: Section = 'todo'; //in partenza lista todo. scrivo così al tipo almeno se sbaglio nel click mi da errore, altrimenti non mi accorgo e la lista non apparirebbe

  sectionChange(section: Section) {
    this.selectedSection = section;
  }
}

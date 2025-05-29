import { Component, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  template:`
  <div class="d-flex justify-content-between">
    <input type="text" placeholder="Aggiungi un nuovo todo" class="form-control me-2" [(ngModel)]="testo" />
    <button type="button" class="btn btn-warning" (click)="richiediInserimento()">
      <i class="bi bi-plus"></i>
    </button>
  </div>
  `,
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  testo: string = '';

  onRichiestaInserimento = output<string>();
  richiediInserimento() {
    this.onRichiestaInserimento.emit(this.testo);
    this.testo = ''; // Resetta il campo di input dopo l'inserimento
  }
}

//(ngModel)]="testo" two way data binding ovvero binding bidirezionale
// [(ngModel)]="testo" è un binding bidirezionale che permette di sincronizzare il valore della variabile 'testo' con il campo di input.
// Quando l'utente digita nel campo di input, il valore della variabile 'testo' viene aggiornato automaticamente.
// Allo stesso modo, se il valore della variabile 'testo' viene modificato nel codice, il campo di input verrà aggiornato automaticamente.
// Questo è utile per mantenere il campo di input sincronizzato con lo stato del componente, permettendo una facile gestione dei dati inseriti dall'utente.
// Il binding bidirezionale è una caratteristica potente di Angular che semplifica la gestione dello stato dell'interfaccia utente e dei dati del componente.
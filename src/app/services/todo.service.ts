import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TODOS } from '../data/todos';


//Il decoratore @Injectable indica che questa classe può essere iniettata come dipendenza in altri componenti o servizi.
@Injectable({
  providedIn: 'root'
  //L'opzione { providedIn: 'root' } specifica che il servizio è disponibile a livello globale nell'applicazione. Questo significa che Angular gestisce automaticamente la creazione di un'unica istanza del servizio (singleton) e la rende disponibile ovunque.
})

// export class TodoService:
// Definisce la classe del servizio. In questo caso, la classe è vuota e non contiene ancora metodi o proprietà.
// È il punto in cui si implementa la logica per gestire i dati relativi alle attività (to-do), come recuperare, aggiungere, modificare o eliminare attività.

export class TodoService {

  // Il costruttore è presente ma non contiene alcuna logica. Può essere utilizzato per iniettare altre dipendenze necessarie al servizio, come HttpClient per effettuare richieste HTTP.
  constructor() { }

  getTodos() {
    return TODOS; // Restituisce l'array di attività predefinito
  }
}

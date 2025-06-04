import { Injectable } from '@angular/core';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  autoNelCarrello: Auto[] = []; // Inizializzo un array vuoto per le auto nel carrello

  // Aggiungo un metodo per aggiungere un'auto al carrello
  aggiungiAuto(auto: Auto) {
    this.autoNelCarrello.push(auto);
  }
  // Aggiungo un metodo per svuotare il carrello
  svuotaCarrello() {
    this.autoNelCarrello = []; // Svuota l'array delle auto nel carrello
  }

  constructor() { }
}

import { Component, inject, Input } from '@angular/core';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-auto-item',
  imports: [CommonModule],
  templateUrl: './auto-item.component.html',
  styleUrl: './auto-item.component.css'
})
export class AutoItemComponent {
  @Input()  // Decoratore per indicare che questa proprietà può essere impostata da un componente genitore
  auto?: Auto; // proprietà che rappresenta un singolo autoveicolo

  carrelloService: CarrelloService = inject(CarrelloService)

  aggiungiAlCarrello() {
    this.carrelloService.aggiungiAuto(this.auto!); // Aggiunge l'auto al carrello, usando l'operatore di non-null assertion (!) per indicare che auto non è undefined
  }
}

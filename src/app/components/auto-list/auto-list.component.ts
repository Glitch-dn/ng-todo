import { Component, inject, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { AutoItemComponent } from "../auto-item/auto-item.component";

@Component({
  selector: 'app-auto-list',
  imports: [CommonModule, AutoItemComponent],
  templateUrl: './auto-list.component.html',
  styleUrl: './auto-list.component.css'
})
export class AutoListComponent implements OnInit {
  
  //richiedo il servizio AutoService che gestisce l'elenco degli autoveicoli e lo inietto
  //in modo che possa essere utilizzato in questo componente
  //L'iniezione avviene tramite il decoratore inject, che permette di ottenere un'istanza del servizio
  autoService: AutoService = inject(AutoService);

  autos: Auto[] = [];

  ngOnInit(): void {
    this.autos = this.autoService.getAutos(); //qui ci sara la richiesta AJAX per ottenere gli autoveicoli
  }
}

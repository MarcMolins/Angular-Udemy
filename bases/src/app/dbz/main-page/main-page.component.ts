import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent{

  personajes: IPersonaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 7500},
  ]

  nuevo: IPersonaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
}

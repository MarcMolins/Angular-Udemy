import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent{

  constructor() { }

  nuevo: IPersonaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

}

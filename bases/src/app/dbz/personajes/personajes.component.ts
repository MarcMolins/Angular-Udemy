import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  constructor(private dbzService: DbzService) { }

  get personajes(): IPersonaje[] {
    return this.dbzService.personajes;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{
  @Input() personajes: IPersonaje[] = [];
}

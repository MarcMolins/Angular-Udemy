import { Injectable } from "@angular/core";
import { IPersonaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {


  private _personajes: IPersonaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 7500},
  ]

  get personajes(): IPersonaje[] {
    return [...this._personajes];
  }

  constructor() { }

  agregarPersonaje(personaje: IPersonaje) {
    this._personajes.push(personaje)
  }
}

import { Component, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() personajes: IPersonaje[] = []
  @Input() nuevo: IPersonaje = {
    nombre: '',
    poder: 0
  }

  add(){
    if(this.nuevo.nombre === '') return;

    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre: '', poder: 0}

    console.log(this.personajes)
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() nuevo: IPersonaje = {
    nombre: '',
    poder: 0
  }
  // @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter;

  constructor(private dbzservice: DbzService) { }

  add(){
    if(this.nuevo.nombre === '') return;
    //this.onNuevoPersonaje.emit(this.nuevo)

    console.log(this.nuevo);
    this.dbzservice.agregarPersonaje(this.nuevo)
    this.nuevo = {nombre: '', poder: 0}
  }

}

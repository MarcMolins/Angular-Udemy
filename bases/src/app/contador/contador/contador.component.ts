import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title.toUpperCase() }}</h1>

    <button (click)="acumular(-1)">-</button>
    <span>{{ number }}</span>
    <button (click)="acumular(1)">+</button>

    <hr>

    <h3>La base es: <strong>{{ base }}</strong></h3>
    <button (click)="acumular(-base)">-5</button>
    <button (click)="acumular(base)">+5</button>
  `
})
export class ContadorComponent {
  public title : string  = 'Contador APP';
  public number: number  = 10;
  public base  : number  = 5;

  acumular( value: number ) {
    this.number += value;
  }
}

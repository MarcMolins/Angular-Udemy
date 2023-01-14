import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService: GifsService
  ) { }

  buscar(): void {
    const value = this.txtBuscar.nativeElement.value;

    this.gifService.buscarGifs(value)
    this.txtBuscar.nativeElement.value = ''
  }

}

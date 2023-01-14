import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  constructor(
    private gifService: GifsService
  ) { }

  get result(){
    return this.gifService.result
  }

}

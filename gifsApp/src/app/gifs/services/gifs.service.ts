import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = 'uUXdziOdEKgRA70SLWnE3ypL4OIgMjZ2';
  private apiUrl    : string = 'http://api.giphy.com/v1/gifs'
  private _historial: string[] = [];

  public result     : Gif[] = []

  constructor(private http: HttpClient) {
    const hasHistorial = localStorage.getItem('historial');
    const hasLastResult = localStorage.getItem('lastResult');

    if(hasHistorial){
      this._historial = JSON.parse(hasHistorial!)
    }
    if(hasLastResult){
      this.result = JSON.parse(hasLastResult);
    }
  }

  get historial() {
    return [...this._historial]
  }

  buscarGifs(query: string) {
    query = query.toLowerCase();

    if(query.trim().length === 0){
      return;
    }

    if(!this._historial.includes(query)){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 9);

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGIFResponse>(`${this.apiUrl}/search`, {params})
      .subscribe((res) => {
        console.log(res);
        this.result = res.data;
        localStorage.setItem('lastResult', JSON.stringify(this.result))
      }
    )

    console.log(this._historial);
  }

}

import { Injectable } from '@angular/core';

//MODULES
import { HttpClient, HttpParams} from '@angular/common/http';

// INTERFACES
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // VARIABLES / PROPIEDADES

  private api_key     : string = 'O8pFTxneEiJfBwTLcXBg5xc07HrbNs9R';

  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';

  private _historial  : string[] = [];

  public resultados   : Gif[] = [];


  // CONSTRUCTOR
  constructor(private _http:HttpClient) {

    // this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }

    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse( localStorage.getItem('resultados')! );
    }

  }

  // GETTERS
  get historial() {
    return [...this._historial];
  }

  // METODOS Y FUNCIONES

  buscarGifs( query: string ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial) );

    }

    const params = new HttpParams()
          .set('api_key', this.api_key)
          .set('limit', '10')
          .set('q', query);

    this._http.get<SearchGifsResponse>(`${ this.servicioUrl}/search`, { params })
    .subscribe( (res) => {
      // console.log(res.data);
      this.resultados = res.data;

      localStorage.setItem('resultados', JSON.stringify( this.resultados ) );
    },
    err =>{
      console.log(err);
    });


  }
}

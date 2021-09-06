import { Component, OnInit } from '@angular/core';

// SERVICES
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private _gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get resultados(){
    return this._gifsService.resultados;
  }

}

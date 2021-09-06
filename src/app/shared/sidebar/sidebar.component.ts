import { Component, OnInit } from '@angular/core';

// SERVICES
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private _gifsService: GifsService) {

  }

  ngOnInit(): void {

  }

  get historial(){
    return this._gifsService.historial;
  }

  buscar( termino: string ){
    this._gifsService.buscarGifs( termino );
  }




}

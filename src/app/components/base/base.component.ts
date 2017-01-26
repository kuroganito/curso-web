import {Component, OnInit} from '@angular/core';
import {PeliculaService,IPelicula} from '../../services/pelicula.service'

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    titulo:string;
    peliculas:Array<IPelicula>;
    peliculaDetalle:IPelicula;
    
    constructor(public peliculaService:PeliculaService) {
        this.titulo = "InfoCine";
        this.peliculas = peliculaService.obtenerPeliculas();
        this.peliculaDetalle = this.peliculas[0];
    }

    ngOnInit() {
    }
    
    cambiaDetalle(e){
        this.peliculaDetalle = e;
    }

}

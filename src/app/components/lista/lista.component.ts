import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IPelicula} from '../../services/pelicula.service'

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

    @Input() peliculas: Array<IPelicula>;
    @Output() cambiaDetalle = new EventEmitter();
    constructor() {}

    ngOnInit() {
    }
    seleccionarPelicula(pelicula:IPelicula){
        this.cambiaDetalle.emit(pelicula);
    }
}

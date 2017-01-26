import {Component, OnInit,OnChanges, Input} from '@angular/core';
import {IPelicula} from '../../services/pelicula.service'

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit,OnChanges {
    @Input() pelicula: IPelicula;
    constructor() {}

    ngOnInit() {
    }
    
    ngOnChanges(changes){
    }

}

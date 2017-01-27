import {Component, OnInit,OnChanges, Input} from '@angular/core';
import {IPelicula} from '../../services/pelicula.service'

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit,OnChanges {
    @Input() pelicula: IPelicula;
    stars:Array<string>;
    constructor() {}

    ngOnInit() {
    }
    
    ngOnChanges(changes){
        this.stars = [];
        for(let i = 0;i<5;i++)
            this.stars.push(this.pelicula.calificacion>i?'ion-ios-star':'ion-android-star-outline')
    }

}

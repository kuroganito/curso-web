import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    titulo:string;
    peliculas:Array<any>;
    
    constructor() {
        this.titulo = "InfoCine";
    }

    ngOnInit() {
    }

}

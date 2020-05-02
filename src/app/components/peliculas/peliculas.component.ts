import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

//import {RespuestaMovie, Pelicula } from '../../interfaces/intPeliculas';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent implements OnInit {

//array
// peliculasRecientes: Pelicula[] = [];

// //Ver una parte del slide siguiente
//   slideOpts = {
//     slidesPerView: 1.1,
//     freeMode: true
//   }

  constructor(private movieService: PeliculasService) { }

  ngOnInit(){
    // this.movieService.getPeliculas()
    // .subscribe((respuesta: RespuestaMovie) => {
    //   console.log('Respuesta', respuesta);
    //   this.peliculasRecientes = respuesta.results;
    // });
  }

}

import { Component, OnInit, Input } from '@angular/core';7
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetails, Cast } from 'src/app/interfaces/interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetails={};
  actores: Cast[]=[];
  leerMas =150;
  
  slideActores={
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween:0
  };
  
  constructor( private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moviesService.getPelisDetails(this.id)
    .subscribe(resp =>{
      console.log(resp);
      this.pelicula = resp;
    });
    //console.log('id', this.id)
    this.moviesService.getActorDetails(this.id)
    .subscribe(resp =>{
      console.log(resp);
      this.actores = resp.cast;
    });
  }
  regresar(){
    this.modalCtrl.dismiss();
  }

}

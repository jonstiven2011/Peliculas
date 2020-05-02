import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../interfaces/interface';
import { DetailsComponent } from '../details/details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Movie[]= [];
  slideOpts={
    slidesPerView: 1.1,
    freeMode: true
  }  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async viewDetail(id:string){
    const modal= await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }

}

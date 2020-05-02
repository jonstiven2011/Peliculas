import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/interface';
import { DetailsComponent } from '../details/details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() movies: Movie[]= [];
  @Output() showMore= new EventEmitter;
  
  slideOpts={
    slidesPerView: 3.2,
    freeMode: true
  }  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  onClick(){
    this.showMore.emit();
  }
  
  async viewDetail(id: string){
    const modal= await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie, MovieAnswer} from '..//interfaces/interface';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
pelisrecientes: Movie[]= [];
Populars: Movie[]=[];

constructor(private movieService: MoviesService){}
    ngOnInit(){
     this.movieService.getMovieDetails()
     .subscribe((resp: MovieAnswer)=>{
       console.log('Resp', resp);
       this.pelisrecientes = resp.results;
      });
      this.getPopulars();

    }
    showMore(){
      this.getPopulars();
    }

    getPopulars(){
      this.movieService.getPops()
      .subscribe(resp=>{
        const arrtemp= [...this.Populars, ...resp.results];
        this.Populars= arrtemp;
      });
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieAnswer, PeliculaDetails, RespuestaCredits } from '../interfaces/interface';

const URL= environment.url;
const apiKey= environment.apiKey;
const day= new Date();
const lastMonthDay= new Date(day.getFullYear(), day.getMonth()+1,0).getDate();
const actualMonth = day.getMonth()+1;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularsPage= 0;

  constructor(private http:HttpClient) { }

  private executeQuery<T>(query: string){
    query= URL + query;
    query += `&api_key=${apiKey}`;
    return this.http.get<T>(query);
  }
  getMovieDetails(){
    // return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=157d91ed5a0712417948001e6808f295&primary_release_date.gte=2020-01-12&primary_release_date.lte=2020-03-05`);
  let textMonth;
  if(actualMonth <10) textMonth='0'+ actualMonth; else textMonth= actualMonth;
  const start= `${day.getFullYear()}-${textMonth}-01`;
  const end= `${day.getFullYear()}-${textMonth}-${lastMonthDay}`;
    return this.executeQuery<MovieAnswer>(`/discover/movie?primary_release_date.gte${start}&primary_release_date.lte=${end}`);
}

  getPops(){
    this.popularsPage++;
    const query=`/discover/movie?sort_by=popularity.desc&page=${this.popularsPage}`;
    return this.executeQuery<MovieAnswer>(query);
  }

  getPelisDetails(id:string){
    return this.executeQuery<PeliculaDetails>(`/movie/${id}?a=1`);
  }
  getActorDetails(id:string){
    return this.executeQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }
  buscarPelis(texto:String){
    return this.executeQuery(`/search/movie?query=${texto}`);
  }
}

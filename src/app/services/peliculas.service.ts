import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMovie } from '../interfaces/intPeliculas';
import { RespuestaKits } from '../interfaces/intCartelera';
import { environment } from '../../environments/environment';

//https://api.themoviedb.org/3/discover/movie?api_key=cee2e243314aa244c05bddf907d70e93&primary_release_date.lte=2014-10-22&apy
//Api_Key: cee2e243314aa244c05bddf907d70e93  

//Constantes
const URL = environment.url;
const apiKey = environment.apiKey;
const hoy = new Date();
/**No se debe trabajar con el 0 el getMoth porque es el dia anterior */
const ultimoDiaMes = new Date(hoy.getUTCFullYear(),hoy.getMonth()-1,0).getDate();
const mesActual = hoy.getMonth()+1;
 
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  //Variable privadad tipo string, utilizada solo por el servicio
  private ejecutarQuery<T>(query:string){
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  //Creacion del servicio peliculas
  getPeliculas(){
    let mesTexto;
    if(mesActual < 10)mesTexto = '0' + mesActual; else mesTexto = mesActual;
    //Se debe generar el formato de fecha 2020-01-01
    const inicio = `${hoy.getFullYear()}-${mesTexto}-01`;
    const fin = `${hoy.getUTCFullYear()}-${mesTexto}-${ultimoDiaMes}`;
    return this.ejecutarQuery<RespuestaMovie>(`/discover/movie?primary_release_date.get=${inicio}&primary_release_date.let=${fin}`);
    //return this.http.get<RespuestaMovie>('https://api.themoviedb.org/3/discover/movie?api_key=cee2e243314aa244c05bddf907d70e93&primary_release_date.lte=2014-10-22&apy');
  }

  getPopulares(){
    const query =  `/discover/movie?sort_by=popularity.desc`;
    return this.ejecutarQuery<RespuestaMovie>(query);
  }

  getkits(){
    //return this.http.get('https://api-senapp.herokuapp.com/api/titulada')
    return this.http.get<RespuestaKits>('https://api.themoviedb.org/3/discover/movie?api_key=cee2e243314aa244c05bddf907d70e93&primary_release_date.lte=2010&sort_by=vote_average.desc&apy')
  }
}

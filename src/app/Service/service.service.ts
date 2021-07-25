import { Injectable } from '@angular/core';
import { Pasajero } from '../Modelo/Pasajero';
import { Vuelo } from '../Modelo/Vuelo';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) { }

  //pasajero: Pasajero;

  Url = 'http://localhost:8090/pasajeros/';
  Url_Vuelos = 'http://localhost:8090/vuelos/';
  
  // public getAllPasajerosById(id): Observable<any>{
  //   return this.httpClient.get(this.API_SERVER+id);
  // }

   getPasajeros(){
    return this.http.get<Pasajero[]>(this.Url);
  }
    createPasajero(pasajero:Pasajero){
      return this.http.post<Pasajero>(this.Url,pasajero);
    }
    getPasajeroId(id:number){
      return this.http.get<Pasajero>(this.Url+""+id);
    }
    updatePasajero(pasajero:Pasajero){
      return this.http.post<Pasajero>(this.Url+"/modificar/"+pasajero.id,pasajero);
    }
    deletePasajero(pasajero:Pasajero){
      return this.http.delete<Pasajero>(this.Url+"/delete/"+pasajero.id);
    }
  
  //vuelos
  public getAllVuelos(){
    return this.http.get<Vuelo[]>(this.Url_Vuelos);
  }

  // public getAllVuelosByID(id): Observable<any>{
  //   return this.httpClient.get(this.API_SERVER+id);
  // }
}

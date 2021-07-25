import { Injectable } from '@angular/core';
import { Pasajero } from '../Modelo/Pasajero';
import { Vuelo } from '../Modelo/Vuelo';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8090/pasajeros/';
  Url_Vuelos = 'http://localhost:8090/vuelos/';

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
  
  public getAllVuelos(){
    return this.http.get<Vuelo[]>(this.Url_Vuelos);
  }

}

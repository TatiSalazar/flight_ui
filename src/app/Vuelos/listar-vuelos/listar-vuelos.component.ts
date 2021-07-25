import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Vuelo } from 'src/app/Modelo/Vuelo';
import { Pasajero } from 'src/app/Modelo/Pasajero';

@Component({
  selector: 'app-listar-vuelos',
  templateUrl: './listar-vuelos.component.html',
  styleUrls: ['./listar-vuelos.component.css']
})
export class ListarVuelosComponent implements OnInit {


  vuelos:Vuelo[];
  vuelo:Vuelo=new Vuelo();
  id:any;
  pasajero:Pasajero[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllVuelos().subscribe(data=>{this.vuelos=data;});   
  }
  ListarPasajeros(vuelo:Vuelo){
    localStorage.setItem("id",vuelo.id.toString());
     this.router.navigate(["listarPasajeros"]);
  }

}

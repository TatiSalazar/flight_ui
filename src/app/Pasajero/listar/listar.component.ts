import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pasajero } from 'src/app/Modelo/Pasajero'; 

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pasajeros:Pasajero[];
  pasajero:Pasajero=new Pasajero();
  id:any;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPasajeros().subscribe(data=>{this.pasajeros=data})
  }
  CrearPasajero(){
      this.router.navigate(["add"]);  
  }
  Editar(pasajero:Pasajero):void{
    localStorage.setItem("id",pasajero.id.toString());
    this.router.navigate(["edit"]);
  }
  Eliminar(pasajero:Pasajero){
    this.service.deletePasajero(pasajero)
    .subscribe(data=>{
      this.pasajeros=this.pasajeros.filter(p=>p!==pasajero);
      alert("Usuario eliminado");
    })
  }
  Buscar(){
    for (let i = 0; i < this.pasajeros.length; i++) {
      if(this.id==this.pasajeros[i].id){
        localStorage.setItem("id",this.id.toString());
        this.router.navigate(["edit"]);
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pasajero } from 'src/app/Modelo/Pasajero';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pasajero: Pasajero= new Pasajero();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPasajeroId(+id)
    .subscribe(data=>{
      this.pasajero=data;
    })

  }
  Actualizar(pasajero:Pasajero){
    this.service.updatePasajero(pasajero)
    .subscribe(data=>{
      this.pasajero=data;
      alert("Se Actualizo");
      this.router.navigate(["listarPasajeros"]);
    })
  }

}

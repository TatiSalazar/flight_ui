import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pasajero } from '../../Modelo/Pasajero';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  pasajero: Pasajero = new Pasajero();
  constructor(private router:Router,private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPasajero(this.pasajero).subscribe(data=>{
      alert("se agrego");
      this.router.navigate(["listarPasajeros"]);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ListarVuelos(){
    this.router.navigate(["listarVuelos"]);      
  }

  ListarPasajeros(){
    this.router.navigate(["listarPasajeros"]);      
  }
}
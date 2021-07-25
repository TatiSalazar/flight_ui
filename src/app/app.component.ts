import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vuelosFrontend';
  
  constructor(public translate: TranslateService){
    this.translate.addLangs(['es','en','zh']);
    this.translate.setDefaultLang('es');
    this.translate.use('en');
  }

  // {path:'listarPasajeros',component:ListarComponent},
  //   {path:'add',component:AddComponent},
  //   {path:'edit',component:EditComponent},
  //   {path:'listarVuelos',component:ListarVuelosComponent},
  //   {path:'listarVueloP',component:ListarVuelosPComponent}

  // ListarVuelos(){
  //   this.router.navigate(["listarVuelos"]);      
  // }

  // ListarPasajeros(){
  //   this.router.navigate(["listarPasajeros"]);      
  // }

  // CrearPasajero(){
  //   this.router.navigate(["add"]);      
  // }

  // Buscar(){
  //   this.router.navigate(["edit"]);      
  // }

  // ListarVuelosP(){
  //   this.router.navigate(["listarVueloP"]);      
  // }

  
  // Home(){
  //   this.router.navigate([""]);      
  // }

}


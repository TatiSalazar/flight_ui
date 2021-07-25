import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListarComponent } from './Pasajero/listar/listar.component';
import { EditComponent } from './Pasajero/edit/edit.component';
import { AddComponent } from './Pasajero/add/add.component';
import { ListarVuelosComponent } from './Vuelos/listar-vuelos/listar-vuelos.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import { HomeComponent } from './Home/home/home.component';
import { HeaderComponent } from './Header/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory (http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditComponent,
    AddComponent,
    ListarVuelosComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,FormsModule,HttpClientModule,    
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

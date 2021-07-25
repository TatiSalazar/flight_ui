import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Pasajero/add/add.component';
import { EditComponent } from './Pasajero/edit/edit.component';
import { ListarVuelosComponent } from "./Vuelos/listar-vuelos/listar-vuelos.component";
import { ListarComponent } from './Pasajero/listar/listar.component';
import { AppComponent } from "./app.component";
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
    {path:'listarPasajeros',component:ListarComponent},
    {path:'add',component:AddComponent},
    {path:'edit',component:EditComponent},
    {path:'listarVuelos',component:ListarVuelosComponent},
    {path:'', component:HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}


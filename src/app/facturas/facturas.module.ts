import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FacturasRoutingModule } from './facturas-routing.module';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    FacturaComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule
  ]
})
export class FacturasModule { }

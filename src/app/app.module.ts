import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './comonentes/encabezado/encabezado.component';
import { IntroComponent } from './comonentes/intro/intro.component';
import { ServiciosComponent } from './comonentes/servicios/servicios.component';
import { ContactoComponent } from './comonentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    IntroComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

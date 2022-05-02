import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PublicarProductoComponent } from './components/publicar-producto/publicar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AcercaDeComponent,
    ListaProductosComponent,
    PublicarProductoComponent,
    ProductoComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
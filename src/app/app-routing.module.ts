import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PublicarProductoComponent } from './components/publicar-producto/publicar-producto.component';

const routes: Routes = [
  {path:'',redirectTo:'Login', pathMatch:'full'},
  {path:'Login',component: LoginComponent},
  {path:'Lista-Productos',component: ListaProductosComponent},
  {path:'Publicar-Producto',component: PublicarProductoComponent},
  {path:'Acerca-de',component: AcercaDeComponent},
  {path:'**',redirectTo:'Login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

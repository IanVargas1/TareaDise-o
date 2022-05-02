import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'Login', pathMatch:'full'},
  {path:'Home',component: LoginComponent},
  {path:'Login',component: LoginComponent},
  {path:'Register',component: LoginComponent},
  {path:'**',redirectTo:'Home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CategoriacardapioComponent } from './layout/categoriacardapio/categoriacardapio.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CardapioComponent } from './layout/cardapio/cardapio.component';
import { FormcardapioComponent } from './layout/formcardapio/formcardapio.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
        children:[
         
          {path:'new',component:FormcardapioComponent},  
          {path:'edit/:id',component:FormcardapioComponent},
          {path:'categorias',component:CategoriacardapioComponent},
          {path:'categorias/categoria/:id',component:CardapioComponent}
         
         
        ],
        canActivate:[AuthGuard]
  },
  {
    path:'',component:AuthenticationComponent,
    children:[
       {path:'',redirectTo:'login',pathMatch:'full'},
       
       {path:'login',component:LoginComponent},
       
       {path:'create-account',component:CreateAccountComponent}
    ]
  
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

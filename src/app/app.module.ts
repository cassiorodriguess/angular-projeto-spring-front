import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CardapioComponent } from './layout/cardapio/cardapio.component';
import { FormcardapioComponent } from './layout/formcardapio/formcardapio.component';
import { CardapioService } from './cardapio.service';
import { CategoriacardapioComponent } from './layout/categoriacardapio/categoriacardapio.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    CardapioComponent,
    FormcardapioComponent,
    CategoriacardapioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CardapioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

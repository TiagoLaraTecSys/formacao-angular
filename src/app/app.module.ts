import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { RodapeModule } from './components/rodape/rodape.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CabecalhoModule, RodapeModule, AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

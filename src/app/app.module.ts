import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TarjetaFormComponent } from './components/tarjeta-form/tarjeta-form.component';
import { TarjetaListComponent } from './components/tarjeta-list/tarjeta-list.component';

import { TarjetasService } from "./services/tarjetas.service";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TarjetaFormComponent,
    TarjetaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TarjetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

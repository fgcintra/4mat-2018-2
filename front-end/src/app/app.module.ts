import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ItemService } from './services/item.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Habilitar formatação de data e moeda em português do Brasil
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
   ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

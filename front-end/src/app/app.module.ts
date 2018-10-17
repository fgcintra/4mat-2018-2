import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ItemService } from './services/item.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ItemFormComponent } from './item/item-form/item-form.component';

// Habilitar formatação de data e moeda em português do Brasil
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [
   ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

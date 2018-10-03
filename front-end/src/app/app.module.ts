import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemService } from './services/item.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
   ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemFormComponent } from './item/item-form/item-form.component';

const routes: Routes = [
  {
    path: 'item', component: ItemListComponent
  },
  {
    path: 'item/:id', component: ItemFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

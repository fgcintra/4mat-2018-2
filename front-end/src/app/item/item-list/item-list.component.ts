import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public itens: any;
  // Injeção de dependência no construtor
  constructor(private itemSrv: ItemService) { }

  public colunasVisiveis: string[] = [
    'descricao',
    'tipo',
    'cor',
    'estado_conservacao',
    'conjunto',
    'data_compra',
    'valor_compra'
  ];

  ngOnInit() {
    this.itemSrv.listar().subscribe(
      dados => this.itens = dados,
      erro => console.error(erro)
    );
  }

}

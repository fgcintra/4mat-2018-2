import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public itens: any;
  // Injeção de dependência no construtor
  constructor(
    private itemSrv: ItemService,
    private snackBar: MatSnackBar
  ) { }

  public colunasVisiveis: string[] = [
    'descricao',
    'tipo',
    'cor',
    'estado_conservacao',
    'conjunto',
    'data_compra',
    'valor_compra',
    'excluir'
  ];

  ngOnInit() {
    this.itemSrv.listar().subscribe(
      dados => this.itens = dados,
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este item?')) {
      this.itemSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('Item excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE ITEM: ' + erro.message, 'OK')
      );
    }
  }

}

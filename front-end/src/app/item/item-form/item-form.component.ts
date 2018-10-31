import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { TipoService } from '../../services/tipo.service';
import { LinhaService } from '../../services/linha.service';
import { TamanhoService } from '../../services/tamanho.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor(
    private itemSrv: ItemService,
    private tipoSrv: TipoService,
    private linhaSrv: LinhaService,
    private tamanhoSrv: TamanhoService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  public item: any = {}; // Objeto vazio
  public tipos: any = []; // Vetor vazio
  public linhas: any = [];
  public tamanhos: any = [];

  ngOnInit() {

    // Acessando os parâmetros da url
    this.actRoute.params.subscribe(
      params => {
        if(params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.itemSrv.obterUm(params.id).subscribe(
            dados => {
              this.item = dados;
              console.log(this.item);
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          )
        }
      }
    );

    this.tipoSrv.listar().subscribe(
      dados => {
        this.tipos = dados;
        console.log(this.tipos);
      },
      erro => console.error(erro)
    );

    this.linhaSrv.listar().subscribe(
      dados => {
        this.linhas = dados;
        console.log(this.linhas);
      },
      erro => console.error(erro)
    );

    this.tamanhoSrv.listar().subscribe(
      dados => {
        this.tamanhos = dados;
        console.log(this.tamanhos);
      },
      erro => console.error(erro)
    );

  }

}

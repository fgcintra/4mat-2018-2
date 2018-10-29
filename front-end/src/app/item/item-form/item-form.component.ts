import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { TipoService } from '../../services/tipo.service';
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
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  public item: any = {}; // Objeto vazio
  public tipos: any = []; // Vetor vazio

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

  }

}

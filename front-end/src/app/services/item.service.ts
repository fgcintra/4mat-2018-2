import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/item');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/item/' + id);
  }

  novo(item) {
    return this.http.put('http://localhost:3000/item', item);
  }

  alterar(item) {
    return this.http.patch('http://localhost:3000/item', item);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/item/' + id);
  }

}

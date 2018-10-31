import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TamanhoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/tamanho');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/tamanho/' + id);
  }

  novo(tamanho) {
    return this.http.put('http://localhost:3000/tamanho', tamanho);
  }

  alterar(tamanho) {
    return this.http.patch('http://localhost:3000/tamanho', tamanho);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/tamanho/' + id);
  }  

}

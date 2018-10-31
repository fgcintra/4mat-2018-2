import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/linha');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/linha/' + id);
  }

  novo(linha) {
    return this.http.put('http://localhost:3000/linha', linha);
  }

  alterar(linha) {
    return this.http.patch('http://localhost:3000/linha', linha);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/linha/' + id);
  }  

}

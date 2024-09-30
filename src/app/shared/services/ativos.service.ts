import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export interface Produto{
  id: number,
  nome: string
}

export interface Indexador{
  id: number,
  nome: string
}

export interface Ativos{
  dataValidade: string,
  descricao: string,
  id: number,
  indexador: {id: number, nome: string},
  indexadorId: number,
  investimentoMinimo: number,
  tipoProduto: {id: number, nome: string},
  tipoProdutoId: number
}


@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  urlAtivosApi = environment.ativosUrl;
  urlTipoProdutoApi = environment.tipoProdutoUrl;
  urlIndexadorApi = environment.indexadorUrl;
  constructor(private http: HttpClient) {}

  getAtivos(): Observable<Ativos[]> {
    return this.http.get<Ativos[]>(this.urlAtivosApi);
  }

  deleteAtivo(id: number): Observable<any> {
    return this.http.delete(this.urlAtivosApi +'/' + id);
  }


  editarAtivo(payload: any): Observable<any> {
    return this.http.put(this.urlAtivosApi, payload);
  }

  adicionarAtivo(payload: any): Observable<any> {
    return this.http.post(this.urlAtivosApi, payload);
  }

  getTipoProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlTipoProdutoApi);
  }


  getIndexador(id: number): Observable<Indexador[]> {
    return this.http.get<Indexador[]>(this.urlIndexadorApi + id);
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs'

export interface Produto {
  id: number
  codigoProduto: number
  descricaoProduto: string
  estoque: number
  createdAt: string
  updatedAt: string
}

export interface MovimentacaoDto {
  produtoId: number
  tipo: 'ENTRADA' | 'SAIDA'
  quantidade: number
  descricao: string
}

@Injectable({ providedIn: 'root' })
export class Api {
  constructor(private http: HttpClient) {}

  private url(path: string) {
    const base = environment.apiBaseUrl?.replace(/\/$/, '') || ''
    const p = path.startsWith('/') ? path : `/${path}`
    return `${base}${p}`
  }

  getEstoque() {
    return this.http.get<{ estoque: Produto[] }>(this.url('/estoque')).pipe(map(r => r.estoque))
  }

  getVendas() {
    return this.http.get<any[]>(this.url('/vendas'))
  }

  movimentarEstoque(dto: MovimentacaoDto) {
    return this.http.post(this.url('/estoque/movimentar'), dto)
  }
}

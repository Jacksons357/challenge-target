import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class Api {
  constructor(private http: HttpClient) {}

  private url(path: string) {
    const base = environment.apiBaseUrl?.replace(/\/$/, '') || ''
    const p = path.startsWith('/') ? path : `/${path}`
    return `${base}${p}`
  }

  getEstoque() {
    return this.http.get<{ estoque: any[] }>(this.url('/estoque')).pipe(map(r => r.estoque))
  }

  getVendas() {
    return this.http.get<any[]>(this.url('/vendas'))
  }

  atualizarEstoqueItem(id: string, dto: any) {
    return this.http.patch(this.url(`/estoque/${id}`), dto)
  }
}

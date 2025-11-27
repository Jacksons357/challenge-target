import { injectQuery } from '@tanstack/angular-query-experimental'
import { inject } from '@angular/core'
import { Api } from '../http/api'

export function useVendasQuery() {
  const api = inject(Api)
  return injectQuery(() => ({
    queryKey: ['vendas'],
    queryFn: () => api.getVendas(),
    staleTime: 1000 * 60 * 5,
  }))
}

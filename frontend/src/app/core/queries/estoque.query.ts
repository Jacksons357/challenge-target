import { injectQuery } from '@tanstack/angular-query-experimental'
import { inject } from '@angular/core'
import { Api } from '../http/api'

export function useEstoqueQuery() {
  const api = inject(Api)
  return injectQuery(() => ({
    queryKey: ['estoque'],
    queryFn: () => api.getEstoque(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: 2,
    refetchOnWindowFocus: false,
  }))
}

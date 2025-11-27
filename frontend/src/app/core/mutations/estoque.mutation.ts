import { injectMutation, injectQueryClient } from '@tanstack/angular-query-experimental'
import { inject } from '@angular/core'
import { Api } from '../http/api'

export function useAtualizarEstoqueMutation() {
  const api = inject(Api)
  const qc = injectQueryClient()

  return injectMutation(() => ({
    // mutationFn: (payload: { id: string; dto: any }) =>
    //   api.atualizarEstoqueItem(payload.id, payload.dto),
    // onSuccess: () => {
    //   qc.invalidateQueries({ queryKey: ['estoque'] })
    // },
  }))
}

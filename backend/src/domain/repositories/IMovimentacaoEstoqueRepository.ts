import type MovimentacaoEstoque from '../entities/movimentacao-estoque.model'

export type MoveEstoqueParams = {
	produtoId: number
	tipo: 'ENTRADA' | 'SAIDA'
	quantidade: number
	descricao: string
	estoqueFinal: number
}

export interface IMovimentacaoEstoqueRepository {
	create({
		produtoId,
		tipo,
		quantidade,
		descricao,
		estoqueFinal,
	}: MoveEstoqueParams): Promise<MovimentacaoEstoque>
}

import MovimentacaoEstoque from '../../../domain/entities/movimentacao-estoque.model'
import type {
	IMovimentacaoEstoqueRepository,
	MoveEstoqueParams,
} from '../../../domain/repositories/IMovimentacaoEstoqueRepository'

export class MovimentacaoEstoqueRepository
	implements IMovimentacaoEstoqueRepository
{
	async create({
		produtoId,
		tipo,
		quantidade,
		descricao,
		estoqueFinal,
	}: MoveEstoqueParams): Promise<MovimentacaoEstoque> {
		const movimentacaoEstoque = await MovimentacaoEstoque.create({
			produtoId,
			tipo,
			quantidade,
			descricao,
			estoqueFinal,
		})
		return movimentacaoEstoque
	}
}

import { ProdutosController } from '../../application/controllers/produtos.controller'
import { ProdutosService } from '../../domain/services/produtos.service'
import { MovimentacaoEstoqueRepository } from '../database/repositories/movimentacao-estoque.repository'
import { ProdutosRepository } from '../database/repositories/produtos.repository'

export function makeProdutosController() {
	const produtosRepository = new ProdutosRepository()
	const movimentacaoEstoqueRepository = new MovimentacaoEstoqueRepository()
	const produtosService = new ProdutosService(
		produtosRepository,
		movimentacaoEstoqueRepository,
	)

	return new ProdutosController(produtosService)
}

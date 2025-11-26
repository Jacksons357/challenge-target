import { ProdutosController } from '../../application/controllers/produtos.controller'
import { ProdutosService } from '../../domain/services/produtos.service'
import { ProdutosRepository } from '../database/repositories/produtos.repository'

export function makeProdutosController() {
	const produtosRepository = new ProdutosRepository()
	const produtosService = new ProdutosService(produtosRepository)

	return new ProdutosController(produtosService)
}

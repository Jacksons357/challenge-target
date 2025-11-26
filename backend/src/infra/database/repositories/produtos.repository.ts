import Produto from '../../../domain/entities/produto.model'
import type { IProdutosRepository } from '../../../domain/repositories/IProdutosRepository'

export class ProdutosRepository implements IProdutosRepository {
	async findAll(): Promise<Produto[]> {
		return Produto.findAll()
	}
}

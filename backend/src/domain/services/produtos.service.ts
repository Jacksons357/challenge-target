import type { IProdutosRepository } from '../repositories/IProdutosRepository'

export class ProdutosService {
	constructor(private produtosRepository: IProdutosRepository) {}

	async index() {
		const produtos = await this.produtosRepository.findAll()
		return {
			estoque: produtos,
		}
	}
}

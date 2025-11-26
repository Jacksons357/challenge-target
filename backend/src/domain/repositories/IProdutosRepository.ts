import type Produto from '../entities/produto.model'

export interface IProdutosRepository {
	findAll(): Promise<Produto[]>
}

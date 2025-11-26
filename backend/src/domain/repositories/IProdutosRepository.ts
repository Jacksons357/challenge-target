import type Produto from '../entities/produto.model'

export interface UpdateProdutoParams {
	id: number
	data: Partial<Produto>
}

export interface IProdutosRepository {
	findAll(): Promise<Produto[]>
	findByCodigo(codigoProduto: number): Promise<Produto | null>
	update({ id, data }: UpdateProdutoParams): Promise<Produto>
}

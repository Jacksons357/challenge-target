import Produto from '../../../domain/entities/produto.model'
import type {
	IProdutosRepository,
	UpdateProdutoParams,
} from '../../../domain/repositories/IProdutosRepository'

export class ProdutosRepository implements IProdutosRepository {
	async findAll(): Promise<Produto[]> {
		return Produto.findAll()
	}

	async findByCodigo(codigoProduto: number): Promise<Produto | null> {
		return Produto.findOne({
			where: { codigoProduto },
		})
	}

	async update({ id, data }: UpdateProdutoParams): Promise<Produto> {
		await Produto.update(data, { where: { id } })

		return Produto.findByPk(id) as Promise<Produto>
	}
}

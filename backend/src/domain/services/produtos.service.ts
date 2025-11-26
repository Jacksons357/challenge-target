import type { MoveEstoqueDTO } from '../../application/dtos/MoveEstoqueDTO'
import { ProductNotFoundError } from '../../shared/errors/product-not-found.error'
import type { IMovimentacaoEstoqueRepository } from '../repositories/IMovimentacaoEstoqueRepository'
import type { IProdutosRepository } from '../repositories/IProdutosRepository'

export class ProdutosService {
	constructor(
		private produtosRepository: IProdutosRepository,
		private movimentacaoEstoqueRepository: IMovimentacaoEstoqueRepository,
	) {}

	async index() {
		const produtos = await this.produtosRepository.findAll()
		return {
			estoque: produtos,
		}
	}

	async move({ produtoId, tipo, quantidade, descricao }: MoveEstoqueDTO) {
		const produto = await this.produtosRepository.findByCodigo(produtoId)

		if (!produto) {
			throw new ProductNotFoundError()
		}

		if (quantidade <= 0) {
			throw new Error('A quantidade deve ser maior que zero.')
		}

		let estoqueFinal = produto.estoque

		if (tipo === 'ENTRADA') {
			estoqueFinal = produto.estoque + quantidade
		}

		if (tipo === 'SAIDA') {
			if (produto.estoque < quantidade) {
				throw new Error('Estoque insuficiente para realizar a saída.')
			}
			estoqueFinal = produto.estoque - quantidade
		}

		console.log('Id do produto:', produtoId)
		console.log('estoqueFinal', estoqueFinal)

		const updatedProduto = await this.produtosRepository.update({
			id: produto.id,
			data: {
				estoque: estoqueFinal,
			},
		})

		console.log('updatedProduto', updatedProduto)

		const registerMovimentacao =
			await this.movimentacaoEstoqueRepository.create({
				produtoId: updatedProduto.id,
				tipo,
				quantidade,
				descricao,
				estoqueFinal,
			})

		console.log('registerMovimentacao', registerMovimentacao)

		return {
			message: 'Movimentação registrada com sucesso.',
			produto: {
				id: updatedProduto.id,
				codigoProduto: updatedProduto.codigoProduto,
				descricaoProduto: updatedProduto.descricaoProduto,
				estoqueFinal,
			},
			movimentacao: registerMovimentacao,
		}
	}
}

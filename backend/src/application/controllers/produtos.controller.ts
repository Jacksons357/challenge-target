import type { FastifyReply, FastifyRequest } from 'fastify'
import type { ProdutosService } from '../../domain/services/produtos.service'
import { AppError } from '../../shared/errors/app.error'
import type { MoveEstoqueDTO } from '../dtos/MoveEstoqueDTO'

export class ProdutosController {
	constructor(private produtosService: ProdutosService) {}

	async index(_: FastifyRequest, res: FastifyReply) {
		try {
			const produtos = await this.produtosService.index()

			return res.status(200).send(produtos)
		} catch (error) {
			if (error instanceof AppError) {
				return res.status(error.code).send({ message: error.message })
			}
			return error
		}
	}

	async move(req: FastifyRequest, res: FastifyReply) {
		try {
			const { produtoId, tipo, quantidade, descricao } =
				req.body as MoveEstoqueDTO

			const moveEstoque = await this.produtosService.move({
				produtoId,
				tipo,
				quantidade,
				descricao,
			})

			return res.status(200).send(moveEstoque)
		} catch (error) {
			if (error instanceof AppError) {
				return res.status(error.code).send({ message: error.message })
			}
			return error
		}
	}
}

import type { FastifyReply, FastifyRequest } from 'fastify'
import type { ProdutosService } from '../../domain/services/produtos.service'
import { AppError } from '../../shared/errors/app.error'

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
}

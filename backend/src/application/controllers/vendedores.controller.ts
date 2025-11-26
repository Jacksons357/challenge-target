import type { FastifyReply, FastifyRequest } from 'fastify'
import type { VendedoresService } from '../../domain/services/vendedores.service'
import { AppError } from '../../shared/errors/app.error'

export class VendedoresController {
	constructor(private vendedoresService: VendedoresService) {}

	async index(_: FastifyRequest, res: FastifyReply) {
		try {
			const vendedores = await this.vendedoresService.index()

			return res.status(200).send(vendedores)
		} catch (error) {
			if (error instanceof AppError) {
				return res.status(error.code).send({ message: error.message })
			}
			return error
		}
	}
}

import type { FastifyReply, FastifyRequest } from 'fastify'
import type { FinanceService } from '../../domain/services/finance.service'
import type { CalcularJurosDTO } from '../dtos/CalcularJurosDTO'

export class FinanceController {
	constructor(private financeService: FinanceService) {}

	async handle(req: FastifyRequest, res: FastifyReply) {
		const { valor, dataVencimento } = req.body as CalcularJurosDTO

		const juros = await this.financeService.calcularJuros({
			valor,
			dataVencimento,
		})

		res.status(200).send(juros)
	}
}

import type { FastifyInstance } from 'fastify'
import { calcularJurosSchema } from '../../../application/dtos/CalcularJurosDTO'
import { makeFinanceController } from '../../factories/make-finance-controller.factory'
import validateBodyMiddleware from '../middleware/validate-body.middleware'

export default function financeRoutes(app: FastifyInstance) {
	const controller = makeFinanceController()

	app.post(
		'/calcular-juros',
		{
			preHandler: validateBodyMiddleware(calcularJurosSchema),
		},
		async (req, res) => controller.handle(req, res),
	)
}

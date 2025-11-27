import type { FastifyInstance } from 'fastify'
import { makeFinanceController } from '../../factories/make-finance-controller.factory'

export default function financeRoutes(app: FastifyInstance) {
	const controller = makeFinanceController()

	app.post('/calcular-juros', async (req, res) => controller.handle(req, res))
}

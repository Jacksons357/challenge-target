import type { FastifyInstance } from 'fastify'
import { makeProdutosController } from '../../factories/make-produtos-controller.factory'

export function produtosRoutes(app: FastifyInstance) {
	const controller = makeProdutosController()

	app.get('/', async (req, res) => controller.index(req, res))
}

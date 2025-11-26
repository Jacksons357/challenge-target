import type { FastifyInstance } from 'fastify'
import { makeVendedoresController } from '../../factories/make-vendedores-controller.factory'

export function vendedoresRoutes(app: FastifyInstance) {
	const controller = makeVendedoresController()

	app.get('/', async (req, res) => controller.index(req, res))
	app.get('/comissao', async (req, res) => controller.getComissoes(req, res))
}

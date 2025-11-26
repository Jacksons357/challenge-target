import type { FastifyInstance } from 'fastify'
import { moveEstoqueSchema } from '../../../application/dtos/MoveEstoqueDTO'
import { makeProdutosController } from '../../factories/make-produtos-controller.factory'
import validateBodyMiddleware from '../middleware/validate-body.middleware'

export function produtosRoutes(app: FastifyInstance) {
	const controller = makeProdutosController()

	app.get('/', async (req, res) => controller.index(req, res))
	app.post(
		'/movimentar',
		{
			preHandler: validateBodyMiddleware(moveEstoqueSchema),
		},
		async (req, res) => controller.move(req, res),
	)
}

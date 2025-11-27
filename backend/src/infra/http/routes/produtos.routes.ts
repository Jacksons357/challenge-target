import type { FastifyInstance } from 'fastify'
import { moveEstoqueSchema } from '../../../application/dtos/MoveEstoqueDTO'
import { makeProdutosController } from '../../factories/make-produtos-controller.factory'
import validateBodyMiddleware from '../middleware/validate-body.middleware'

export function produtosRoutes(app: FastifyInstance) {
	const controller = makeProdutosController()

	app.get(
		'/',
		{
			schema: {
				tags: ['Estoque'],
				summary: 'Retorna a lista de produtos',
				description: 'Retorna a lista de produtos disponíveis no estoque',
			},
		},
		async (req, res) => controller.index(req, res),
	)
	app.post(
		'/movimentar',
		{
			schema: {
				tags: ['Estoque'],
				summary: 'Movimenta o estoque de um produto',
				description:
					'Movimenta o estoque de um produto para entrada ou saída retornando o estoque atualizado',
				body: {
					type: 'object',
					properties: {
						produtoId: {
							type: 'number',
							description: 'ID do produto',
						},
						tipo: {
							type: 'string',
							enum: ['ENTRADA', 'SAIDA'],
							description: 'Tipo de movimentação (entrada ou saída)',
						},
						quantidade: {
							type: 'number',
							description: 'Quantidade a ser movimentada',
						},
						descricao: {
							type: 'string',
							description: 'Descrição da movimentação',
						},
					},
					required: ['produtoId', 'tipo', 'quantidade', 'descricao'],
				},
			},
			preHandler: validateBodyMiddleware(moveEstoqueSchema),
		},
		async (req, res) => controller.move(req, res),
	)
}

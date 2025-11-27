import type { FastifyInstance } from 'fastify'
import { calcularJurosSchema } from '../../../application/dtos/CalcularJurosDTO'
import { makeFinanceController } from '../../factories/make-finance-controller.factory'
import validateBodyMiddleware from '../middleware/validate-body.middleware'

export default function financeRoutes(app: FastifyInstance) {
	const controller = makeFinanceController()

	app.post(
		'/calcular-juros',
		{
			schema: {
				tags: ['Financeiro'],
				summary: 'Calcula o juros simples',
				description:
					'Calcula o juros simples com base na taxa, valor e tempo(data de vencimento) fornecidos.',
				body: {
					type: 'object',
					properties: {
						valor: {
							type: 'number',
							description: 'Valor principal',
						},
						dataVencimento: {
							type: 'string',
							description: 'Data de vencimento no formato ISO 8601',
						},
					},
					required: ['valor', 'dataVencimento'],
				},
			},
			preHandler: validateBodyMiddleware(calcularJurosSchema),
		},
		async (req, res) => controller.handle(req, res),
	)
}

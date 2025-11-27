import type { FastifyInstance } from 'fastify'
import { makeVendedoresController } from '../../factories/make-vendedores-controller.factory'

export function vendedoresRoutes(app: FastifyInstance) {
	const controller = makeVendedoresController()

	app.get(
		'/',
		{
			schema: {
				tags: ['Vendas'],
				summary: 'Retorna a lista de vendas por vendedor',
				description: 'Retorna a lista de vendas por vendedor cadastrados',
			},
		},
		async (req, res) => controller.index(req, res),
	)
	app.get(
		'/comissao',
		{
			schema: {
				tags: ['Vendas'],
				summary: 'Retorna as vendas e comissões por vendedor',
				description:
					'Retorna as vendas, comissões por vendedor e resumo das comissões por vendedor.',
			},
		},
		async (req, res) => controller.getComissoes(req, res),
	)
}

import type { FastifyInstance } from 'fastify'
import { produtosRoutes } from './produtos.routes'
import { vendedoresRoutes } from './vendedores.routes'

export function routes(app: FastifyInstance) {
	app.register(produtosRoutes, { prefix: '/estoque' })
	app.register(vendedoresRoutes, { prefix: '/vendas' })
}

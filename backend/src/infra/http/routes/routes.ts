import type { FastifyInstance } from 'fastify'
import financeRoutes from './finance.routes'
import { produtosRoutes } from './produtos.routes'
import { vendedoresRoutes } from './vendedores.routes'

export function routes(app: FastifyInstance) {
	app.register(produtosRoutes, { prefix: '/estoque' })
	app.register(vendedoresRoutes, { prefix: '/vendas' })
	app.register(financeRoutes, { prefix: '/finance' })
}

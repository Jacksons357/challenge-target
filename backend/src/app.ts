import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import fastify from 'fastify'
import { createAssociations } from './domain/entities/associations'
import { routes } from './infra/http/routes/routes'
import { handlerError } from './shared/errors/handler.error'

export const app = fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
			options: {
				colorize: true,
				levelFirst: true,
			},
		},
	},
})

app.register(cors, {
	origin: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	credentials: true,
})

app.register(swagger, {
	openapi: {
		info: {
			title: 'Target Challenge API',
			description: 'API documentation for Target Challenge by Jackson Santos.',
			version: '1.0.0',
		},
		servers: [
			{
				url: 'http://localhost:3333',
				description: 'Development server',
			},
		],
	},
})

app.register(swaggerUI, {
	routePrefix: '/docs',
	uiConfig: {
		docExpansion: 'none',
		deepLinking: true,
	},
	staticCSP: true,
	transformSpecificationClone: true,
})

app.setErrorHandler(handlerError)

app.register(routes)

createAssociations()

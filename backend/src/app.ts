import cors from '@fastify/cors'
import fastify from 'fastify'
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

app.setErrorHandler(handlerError)

app.register(routes)

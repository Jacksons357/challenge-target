import type { FastifyReply, FastifyRequest } from 'fastify'
import type z from 'zod'
import { AppError } from '../../../shared/errors/app.error'

const validateBodyMiddleware =
	(schema: z.ZodSchema) => async (req: FastifyRequest, _: FastifyReply) => {
		const result = schema.safeParse(req.body)
		if (!result.success) {
			throw new AppError('Validation data error', 400)
		}

		req.body = result.data
	}

export default validateBodyMiddleware

import z from 'zod'

export const calcularJurosSchema = z
	.object({
		valor: z.number().positive(),
		dataVencimento: z.coerce.date(),
	})
	.strict()

export type CalcularJurosDTO = z.infer<typeof calcularJurosSchema>

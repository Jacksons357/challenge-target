import z from 'zod'

export const moveEstoqueSchema = z
	.object({
		produtoId: z.number().int().positive(),
		tipo: z.enum(['ENTRADA', 'SAIDA']),
		quantidade: z.number().int().positive(),
		descricao: z.string().min(3),
	})
	.strict()

export type MoveEstoqueDTO = z.infer<typeof moveEstoqueSchema>

import type { CalcularJurosDTO } from '../../application/dtos/CalcularJurosDTO'

export class FinanceService {
	async calcularJuros({ valor, dataVencimento }: CalcularJurosDTO) {
		const today = new Date()
		const vencimento = new Date(dataVencimento)
		const diffMs = today.getTime() - vencimento.getTime()
		const daysAtraso = Math.floor(diffMs / (1000 * 60 * 60 * 24)) // converter milissegundos em dias

		if (daysAtraso <= 0) {
			return { juros: 0, diasAtraso: 0, valorFinal: valor }
		}

		const multaDiaria = 0.025 // 2.5% ao dia
		const juros = valor * multaDiaria * daysAtraso
		const valorFinal = valor + juros

		return {
			daysAtraso,
			juros: Number(juros.toFixed(2)),
			valorFinal: Number(valorFinal.toFixed(2)),
		}
	}
}

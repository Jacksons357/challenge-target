import type {
	IVendedoresRepository,
	ResumoVendedor,
	VendaWithComissao,
} from '../repositories/IVendedoresRepository'

export class VendedoresService {
	constructor(private vendedoresRepository: IVendedoresRepository) {}

	async index() {
		const vendedores = await this.vendedoresRepository.findAll()
		return {
			vendas: vendedores,
		}
	}

	async getComissoes() {
		const vendedores = await this.vendedoresRepository.findAll()
		const vendaWithComissao: VendaWithComissao[] = vendedores.map((venda) => {
			const valor = Number(venda.valor)

			let comissao = 0

			if (valor >= 500) {
				comissao = valor * 0.05
			} else if (valor >= 100) {
				comissao = valor * 0.01
			}

			return {
				...venda.dataValues,
				comissao: Number(comissao.toFixed(2)),
			}
		})

		const groupedComissao = vendaWithComissao.reduce(
			(acc, venda) => {
				if (!acc[venda.vendedor]) acc[venda.vendedor] = []

				acc[venda.vendedor].push(venda)
				return acc
			},
			{} as Record<string, typeof vendaWithComissao>,
		)

		const resumo: Record<string, ResumoVendedor> = {}

		for (const vendedor in groupedComissao) {
			const vendas = groupedComissao[vendedor]
			const totalVendas = vendas.reduce(
				(acc: number, venda: VendaWithComissao) => acc + venda.valor,
				0,
			)
			const totalComissao = vendas.reduce(
				(acc: number, venda: VendaWithComissao) => acc + venda.comissao,
				0,
			)
			const quantidade = vendas.length

			resumo[vendedor] = {
				totalVendas: Number(totalVendas.toFixed(2)),
				totalComissao: Number(totalComissao.toFixed(2)),
				quantidade,
			}
		}

		return {
			vendas: vendaWithComissao,
			porVendedor: groupedComissao,
			resumo,
		}
	}
}

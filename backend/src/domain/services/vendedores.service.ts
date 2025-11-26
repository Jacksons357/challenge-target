import type { IVendedoresRepository } from '../repositories/IVendedoresRepository'

export class VendedoresService {
	constructor(private vendedoresRepository: IVendedoresRepository) {}

	async index() {
		const vendedores = await this.vendedoresRepository.findAll()
		return {
			vendas: vendedores,
		}
	}
}

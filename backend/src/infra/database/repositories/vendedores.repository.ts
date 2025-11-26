import Vendedor from '../../../domain/entities/vendedor.model'
import type { IVendedoresRepository } from '../../../domain/repositories/IVendedoresRepository'

export class VendedoresRepository implements IVendedoresRepository {
	async findAll(): Promise<Vendedor[]> {
		return Vendedor.findAll()
	}
}

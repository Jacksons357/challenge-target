import type Vendedor from '../entities/vendedor.model'

export interface IVendedoresRepository {
	findAll(): Promise<Vendedor[]>
}

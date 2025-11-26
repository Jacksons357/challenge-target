import { VendedoresController } from '../../application/controllers/vendedores.controller'
import { VendedoresService } from '../../domain/services/vendedores.service'
import { VendedoresRepository } from '../database/repositories/vendedores.repository'

export function makeVendedoresController() {
	const vendedoresRepository = new VendedoresRepository()
	const vendedoresService = new VendedoresService(vendedoresRepository)

	return new VendedoresController(vendedoresService)
}

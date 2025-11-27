import { FinanceController } from '../../application/controllers/finance.controller'
import { FinanceService } from '../../domain/services/finance.service'

export function makeFinanceController() {
	const financeService = new FinanceService()

	return new FinanceController(financeService)
}

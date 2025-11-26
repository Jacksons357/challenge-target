import type Vendedor from '../entities/vendedor.model'

export interface VendaWithComissao {
	vendedor: string
	valor: number
	comissao: number
}

export interface ResumoVendedor {
	totalVendas: number
	totalComissao: number
	quantidade: number
}

export interface IVendedoresRepository {
	findAll(): Promise<Vendedor[]>
}

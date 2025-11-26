import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/database/sequelize'
import Produto from './produto.model'

export class MovimentacaoEstoque extends Model {
	declare id: number
	declare descricao: string
	declare tipo: 'ENTRADA' | 'SAIDA'
	declare quantidade: number
	declare estoqueFinal: number
	declare produtoId: number
}

MovimentacaoEstoque.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		descricao: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tipo: {
			type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
			allowNull: false,
		},
		quantidade: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		estoqueFinal: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		produtoId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Produto,
				key: 'id',
			},
		},
	},
	{
		sequelize,
		tableName: 'movimentacoes_estoque',
		timestamps: true,
	},
)

export default MovimentacaoEstoque

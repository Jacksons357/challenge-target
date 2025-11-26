import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/database/sequelize'

export class Produto extends Model {
	declare id: number
	declare codigoProduto: number
	declare descricaoProduto: string
	declare estoque: number
}

Produto.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		codigoProduto: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		descricaoProduto: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		estoque: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'produtos',
		timestamps: true,
	},
)

export default Produto

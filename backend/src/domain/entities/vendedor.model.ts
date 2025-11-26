import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../infra/database/sequelize'

export class Vendedor extends Model {
	declare id: number
	declare vendedor: string
	declare valor: number
}

Vendedor.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		vendedor: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		valor: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'vendedores',
		timestamps: true,
	},
)

export default Vendedor

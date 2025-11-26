'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('movimentacoes_estoque', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			tipo: {
				type: Sequelize.ENUM('ENTRADA', 'SAIDA'),
				allowNull: false,
			},
			quantidade: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			estoqueFinal: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			produtoId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'produtos',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		})
	},

	async down(queryInterface, _) {
		await queryInterface.dropTable('movimentacoes_estoque')
	},
}

'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('produtos', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			codigoProduto: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			descricaoProduto: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			estoque: {
				type: Sequelize.INTEGER,
				allowNull: false,
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

	async down(queryInterface) {
		await queryInterface.dropTable('produtos')
	},
}

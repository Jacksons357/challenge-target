'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('vendedores', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			vendedor: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			valor: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
		})
	},

	async down(queryInterface, _) {
		await queryInterface.dropTable('vendedores')
	},
}

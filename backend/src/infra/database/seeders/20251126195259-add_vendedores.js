'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vendedores',
      [
        { vendedor: 'João Silva', valor: 1200.50, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 950.75, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 1800.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 1400.30, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 1100.90, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 1550.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 1700.80, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 250.30, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 480.75, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'João Silva', valor: 320.40, createdAt: new Date(), updatedAt: new Date() },

        { vendedor: 'Maria Souza', valor: 2100.40, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 1350.60, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 950.20, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 1600.75, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 1750.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 1450.90, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 400.50, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 180.20, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Maria Souza', valor: 90.75, createdAt: new Date(), updatedAt: new Date() },

        { vendedor: 'Carlos Oliveira', valor: 800.50, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 1200.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 1950.30, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 1750.80, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 1300.60, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 300.40, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 500.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Carlos Oliveira', valor: 125.75, createdAt: new Date(), updatedAt: new Date() },

        { vendedor: 'Ana Lima', valor: 1000.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 1100.50, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 1250.75, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 1400.20, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 1550.90, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 1650.00, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 75.30, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 420.90, createdAt: new Date(), updatedAt: new Date() },
        { vendedor: 'Ana Lima', valor: 315.40, createdAt: new Date(), updatedAt: new Date() }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendedores', null, {})
  }
}

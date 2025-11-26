'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Produtos',
      [
        {
          codigoProduto: 101,
          descricaoProduto: 'Caneta Azul',
          estoque: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigoProduto: 102,
          descricaoProduto: 'Caderno Universitário',
          estoque: 75,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigoProduto: 103,
          descricaoProduto: 'Borracha Branca',
          estoque: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigoProduto: 104,
          descricaoProduto: 'Lápis Preto HB',
          estoque: 320,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          codigoProduto: 105,
          descricaoProduto: 'Marcador de Texto Amarelo',
          estoque: 90,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {})
  }
}

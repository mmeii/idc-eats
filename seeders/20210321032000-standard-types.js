'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Types', [
      {
        type: 'diet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'cuisine',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Types', null, {});
  }
};

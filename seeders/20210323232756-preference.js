'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Preferences', [
      {
        UserId: 1,
        CategoryId: 1
      },
      {
        UserId: 1,
        CategoryId: 4
      },
      {
        UserId: 1,
        CategoryId: 6
      },
      {
        UserId: 1,
        CategoryId: 12
      },
      {
        UserId: 1,
        CategoryId: 16
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Preferences', null, {});
  }
};
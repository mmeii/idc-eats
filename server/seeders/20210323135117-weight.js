'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Weights', [
      {
        value: 50,
        CategoryId: 1,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 2,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 3,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 4,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 5,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 6,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 7,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 8,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 9,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 10,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 11,
        UserId: 1
      },
      {
        value: 50,
        CategoryId: 12,
        UserId: 1
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Weights', null, {});
  }
};

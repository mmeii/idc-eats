'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories',[
      {
        yelp_category: 'asianfusion,chinese,japanese,korean,thai,vietnamese,mongolian,sushi',
        display_category: 'Asian',
        type_id: 2
      },
      {
        yelp_category: 'newamerican,tradamerican,bbq,burgers,chicken_wings,steak,southern,seafood,cajun,hawaiian,fondue',
        display_category: 'American',
        type_id: 2
      },
      {
        yelp_category: 'italian',
        display_category: 'Italian',
        type_id: 2
      },
      {
        yelp_category: 'indian',
        display_category: 'Indian',
        type_id: 2
      },
      {
        yelp_category: 'mexican',
        display_category: 'Mexican',
        type_id: 2
      },
      {
        yelp_category: 'ethiopian',
        display_category: 'Ethiopian',
        type_id: 2
      },
      {
        yelp_category: 'french',
        display_category: 'French',
        type_id: 2
      },
      {
        yelp_category: 'mediterranean',
        display_category: 'Mediterranean',
        type_id: 2
      },
      {
        yelp_category: 'mideastern',
        display_category: 'Middle Eastern',
        type_id: 2
      },
      {
        yelp_category: 'somali',
        display_category: 'Somali',
        type_id: 2
      },
      {
        yelp_category: 'spanish,tapas',
        display_category: 'Spanish',
        type_id: 2
      },
      {
        yelp_category: 'pizza',
        display_category: 'Pizza',
        type_id: 2
      },
      {
        yelp_category: 'gluten_free',
        display_category: 'Gluten Free',
        type_id: 1
      },
      {
        yelp_category: 'kosher',
        display_category: 'Kosher',
        type_id: 1
      },
      {
        yelp_category: 'raw-food',
        display_category: 'Raw Food',
        type_id: 1
      },
      {
        yelp_category: 'vegan',
        display_category: 'Vegan',
        type_id: 1
      },
      {
        yelp_category: 'vegetarian',
        display_category: 'Vegetarian',
        type_id: 1
      },
      {
        yelp_category: 'halal',
        display_category: 'Halal',
        type_id: 1
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

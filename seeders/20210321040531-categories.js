'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories',[
      {
        yelp_category: 'asianfusion,chinese,japanese,korean,thai,vietnamese,mongolian,sushi',
        display_category: 'Asian',
        TypeId: 2
      },
      {
        yelp_category: 'newamerican,tradamerican,bbq,burgers,chicken_wings,steak,southern,seafood,cajun,hawaiian,fondue',
        display_category: 'American',
        TypeId: 2
      },
      {
        yelp_category: 'italian',
        display_category: 'Italian',
        TypeId: 2
      },
      {
        yelp_category: 'indian',
        display_category: 'Indian',
        TypeId: 2
      },
      {
        yelp_category: 'mexican',
        display_category: 'Mexican',
        TypeId: 2
      },
      {
        yelp_category: 'ethiopian',
        display_category: 'Ethiopian',
        TypeId: 2
      },
      {
        yelp_category: 'french',
        display_category: 'French',
        TypeId: 2
      },
      {
        yelp_category: 'mediterranean',
        display_category: 'Mediterranean',
        TypeId: 2
      },
      {
        yelp_category: 'mideastern',
        display_category: 'Middle Eastern',
        TypeId: 2
      },
      {
        yelp_category: 'somali',
        display_category: 'Somali',
        TypeId: 2
      },
      {
        yelp_category: 'spanish,tapas',
        display_category: 'Spanish',
        TypeId: 2
      },
      {
        yelp_category: 'pizza',
        display_category: 'Pizza',
        TypeId: 2
      },
      {
        yelp_category: 'gluten_free',
        display_category: 'Gluten Free',
        TypeId: 1
      },
      {
        yelp_category: 'kosher',
        display_category: 'Kosher',
        TypeId: 1
      },
      {
        yelp_category: 'raw-food',
        display_category: 'Raw Food',
        TypeId: 1
      },
      {
        yelp_category: 'vegan',
        display_category: 'Vegan',
        TypeId: 1
      },
      {
        yelp_category: 'vegetarian',
        display_category: 'Vegetarian',
        TypeId: 1
      },
      {
        yelp_category: 'halal',
        display_category: 'Halal',
        TypeId: 1
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

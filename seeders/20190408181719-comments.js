'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [{
        movie_id: 1,
        comment: 'comment1',
        createdAt: '1999-01-08',
        updatedAt: '1999-01-08'
      },{
        movie_id: 2,
        comment: 'comment2',
        createdAt: '1999-01-08',
        updatedAt: '1999-01-08'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};

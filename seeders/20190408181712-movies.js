'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Movies', [{
        title: 'title1',
        imdb_id: 'imdb_id1',
        json_data: '{"json_data":1}',
        createdAt: '1999-01-08',
        updatedAt: '1999-01-08'
      }, {
        title: 'title2',
        imdb_id: 'imdb_id2',
        json_data: '{"json_data":2}',
        createdAt: '1999-01-08',
        updatedAt: '1999-01-08'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Movies', null, {});
  }
};

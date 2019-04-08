'use strict';

module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    imdb_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    json_data: DataTypes.JSONB,
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};

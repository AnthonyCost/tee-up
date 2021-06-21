"use strict";
module.exports = (sequelize, DataTypes) => {
  const GolfCourse = sequelize.define(
    "GolfCourse",
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
    },
    {}
  );
  GolfCourse.associate = function (models) {
    // associations can be defined here
    // golf course can have many rounds
  };
  return GolfCourse;
};

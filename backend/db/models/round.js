'use strict';
module.exports = (sequelize, DataTypes) => {
  const Round = sequelize.define('Round', {
    courseId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    ruleset: DataTypes.STRING,
    startTime: DataTypes.DATE,
    holes: DataTypes.NUMERIC
  }, {});
  Round.associate = function(models) {
    // associations can be defined here
  };
  return Round;
};
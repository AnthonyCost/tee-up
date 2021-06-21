'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    hostUserId: DataTypes.INTEGER,
    playStyle: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};
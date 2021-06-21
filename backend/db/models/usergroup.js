'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
    // this is a through table so this should be empty!
  };
  return UserGroup;
};

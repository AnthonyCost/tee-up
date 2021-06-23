"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      hostUserId: DataTypes.INTEGER,
      playStyle: DataTypes.STRING,
      description: DataTypes.TEXT,
      groupName: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {}
  );
  Group.associate = function (models) {
    // associations can be defined here
    // a group can have many rounds
    Group.hasMany(models.Round, { foreignKey: "groupId" });

    // add column mapping for userGroup
    const columnMapping = {
      through: "Usergroup",
      otherKey: "userId",
      foreignKey: "groupId",
    };
    Group.belongsToMany(models.User, columnMapping);
  };
  return Group;
};

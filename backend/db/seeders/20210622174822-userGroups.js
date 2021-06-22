"use strict";

// userId: DataTypes.INTEGER,
// groupId: DataTypes.INTEGER,
// createdAt: new Date(),
// updatedAt: new Date(),

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "UserGroups",
      [
        {
          userId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserGroups", null, {});
  },
};

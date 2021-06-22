"use strict";

// {
//           hostUserId: DataTypes.INTEGER,
//           playStyle: DataTypes.STRING,
//           description: DataTypes.TEXT,
//           groupName: DataTypes.STRING,
//         },

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          hostUserId: ,
          playStyle: "",
          description: "",
          groupName: "",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};

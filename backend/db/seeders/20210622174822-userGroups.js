"use strict";

const db = require("../models");
const { Group, User } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const groups = await Group.findAll();

    return queryInterface.bulkInsert(
      "UserGroups",
      [
        {
          userId: users[0].id,
          groupId: groups[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: userId[1].id,
          groupId: groups[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: userId[2].id,
          groupId: groups[2].id,
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

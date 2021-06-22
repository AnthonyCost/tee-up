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
          userId: 13,
          groupId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          groupId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          groupId: 15,
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

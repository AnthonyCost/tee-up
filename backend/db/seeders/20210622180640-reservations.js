"use strict";

const db = require("../models");
const { Round, User } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const rounds = await Round.findAll();

    return queryInterface.bulkInsert(
      "Reservations",
      [
        {
          userId: users[0].id,
          status: false,
          roundId: rounds[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: users[2].id,
          status: true,
          roundId: rounds[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: users[1].id,
          status: true,
          roundId: rounds[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reservations", null, {});
  },
};

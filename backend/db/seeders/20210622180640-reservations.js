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
          userId: 13,
          status: false,
          roundId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          status: true,
          roundId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          status: true,
          roundId: 9,
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

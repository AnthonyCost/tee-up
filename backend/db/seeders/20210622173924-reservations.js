"use strict";

// userId: DataTypes.INTEGER,
// status: DataTypes.BOOLEAN,
// roundId: DataTypes.INTEGER,
// createdAt: new Date(),
// updatedAt: new Date(),

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reservations",
      [
        {
          userId: 1,
          status: false,
          roundId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          status: true,
          roundId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          status: true,
          roundId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reservations", null, {});
  },
};

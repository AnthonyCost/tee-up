"use strict";
// courseId: DataTypes.INTEGER,
// groupId: DataTypes.INTEGER,
// ruleset: DataTypes.INTEGER,
// startTime: DataTypes.datetime,
// holes: DataTypes.numeric,
// createdAt: new Date(),
// updatedAt: new Date(),

// {
//           courseId: ,
//           groupId: ,
//           ruleset: ,
//           startTime: ,
//           holes: ,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Rounds",
      [
        {
          courseId: 1,
          groupId: 1,
          ruleset: "Scramble",
          // startTime: ,
          holes: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 5,
          groupId: 3,
          ruleset: "Standard",
          // startTime: ,
          holes: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 3,
          groupId: 2,
          ruleset: "PGA",
          // startTime: ,
          holes: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rounds", null, {});
  },
};

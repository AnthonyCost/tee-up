"use strict";

const db = require("../models");
const { Group, GolfCourse } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // findAll methods here
    const groups = await Group.findAll();
    const golfCourses = await GolfCourse.findAll();

    return queryInterface.bulkInsert(
      "Rounds",
      [
        {
          courseId: 21,
          groupId: 13,
          ruleset: "Scramble",
          startTime: "2004-10-19 10:23:54",
          holes: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 21,
          groupId: 13,
          ruleset: "Standard",
          startTime: "2004-10-19 10:23:54",
          holes: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 21,
          groupId: 13,
          ruleset: "PGA",
          startTime: "2004-10-19 10:23:54",
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

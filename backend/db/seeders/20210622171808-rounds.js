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
          courseId: golfCourses[0].id,
          groupId: groups[0].id,
          ruleset: "Scramble",
          startTime: "2004-10-19 10:23:54",
          holes: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: golfCourses[4].id,
          groupId: groups[2].id,
          ruleset: "Standard",
          startTime: "2004-10-19 10:23:54",
          holes: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: golfCourses[2].id,
          groupId: groups[1].id,
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

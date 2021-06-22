"use strict";

const db = require('../models');
const {User} = db;

module.exports = {

  up: async (queryInterface, Sequelize) => {

    const users = await User.findAll();

    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          hostUserId: users[0].id,
          playStyle: "Casual",
          description: "Still learning!",
          groupName: "Beginners here!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostUserId: users[1].id,
          playStyle: "Professional",
          description: "We are a group of PGA level players",
          groupName: "The Pros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostUserId: users[2].id,
          playStyle: "Competitive",
          description: "Playing for money!",
          groupName: "Gamblers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};

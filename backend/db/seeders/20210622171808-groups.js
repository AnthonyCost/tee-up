"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          hostUserId: 1,
          playStyle: "Casual",
          description: "Still learning!",
          groupName: "Beginners here!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostUserId: 2,
          playStyle: "Professional",
          description: "We are a group of PGA level players",
          groupName: "The Pros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostUserId: 3,
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

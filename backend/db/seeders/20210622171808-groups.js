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
        },
        {
          hostUserId: 2,
          playStyle: "Professional",
          description: "We are a group of PGA level players",
          groupName: "The Pros",
        },
        {
          hostUserId: 3,
          playStyle: "Competitive",
          description: "Playing for money!",
          groupName: "Gamblers",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};

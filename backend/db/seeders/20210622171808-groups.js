"use strict";

const db = require("../models");
const { User } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // findAll methods here

    const users = await User.findAll();

    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          hostUserId: users[0].id,
          playStyle: "Casual",
          description: "Still learning!",
          groupName: "Beginners here!",
          imageUrl:
            "https://images.unsplash.com/photo-1584837140822-757f4680434f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostUserId: users[1].id,
          playStyle: "Professional",
          description: "We are a group of PGA level players",
          groupName: "The Pros",
          imageUrl:
            "https://images.unsplash.com/photo-1621005570352-6418df03796b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostUserId: users[2].id,
          playStyle: "Competitive",
          description: "Playing for money!",
          groupName: "Gamblers",
          imageUrl: null,
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

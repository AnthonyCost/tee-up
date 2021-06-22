"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Rounds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      courseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "GolfCourses" },
      },
      groupId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Groups" },
      },
      ruleset: {
        type: Sequelize.STRING,
      },
      startTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      holes: {
        allowNull: false,
        type: Sequelize.NUMERIC,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Rounds");
  },
};

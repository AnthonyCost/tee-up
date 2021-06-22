"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("GolfCourses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      lat: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      lng: {
        allowNull: false,
        type: Sequelize.DECIMAL,
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
    return queryInterface.dropTable("GolfCourses");
  },
};

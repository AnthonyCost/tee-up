"use strict";

// {
//           name: ,
//           url: ,
//           address: ,
//           city: ,
//           state: ,
//           zipcode: ,
//           lat: ,
//           lng: ,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "GolfCourses",
      [
        {
          name: "Buffalo Creek",
          url: "https://golfbuffalocreek.com/",
          address: "8100 69th St E",
          city: "Palmetto",
          state: "FL",
          zipcode: "34221",
          lat: 27.5786982868544,
          lng: -82.4825722936574,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("GolfCourses", null, {});
  },
};

"use strict";

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
        {
          name: "Pebble Beach",
          url: "https://www.pebblebeach.com/",
          address: "1700 17 Mile Dr",
          city: "Pebble Beach",
          state: "CA",
          zipcode: "93953",
          lat: 36.5698809309021,
          lng: -121.949145838912,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Augusta National Golf Club",
          url: "https://www.masters.com/en_US/course/index.html",
          address: "2604 Washington Rd",
          city: "Augusta",
          state: "GA",
          zipcode: "30904",
          lat: 33.5031563839659,
          lng: -82.0208680710291,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TPC Sawgrass",
          url: "http://tpc.com/sawgrass",
          address: "110 Championship Way",
          city: "Ponte Vedra Beach",
          state: "FL",
          zipcode: "32082",
          lat: 30.1988480529256,
          lng: -81.395642461363,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pinehurst No. 2",
          url: "https://www.pinehurst.com/golf/courses/no-2/?NCK=8775452124&utm_source=GMBlisting&utm_medium=organic",
          address: "1 Carolina Vista Dr",
          city: "Pinehurst",
          state: "NC",
          zipcode: "28374",
          lat: 35.1904098543013,
          lng: -79.4674081539777,
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

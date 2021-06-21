'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    roundId: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
    // this is a through table so this should be empty!
    // but here is what the relation should be: a user can have many reservations and a reservation belongs to a round
  };
  return Reservation;
};

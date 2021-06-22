const express = require('express');

// create router here
const router = express.router();
// since we're doing db stuff, you'll want some kind of asyncHandler
const asyncHandler = require('express-async-handler');
// Take a second to import the database stuff you'll need

  const { Group } = require("../../db/models");

// require authMiddleware here if needed, (not needed here for the all groups page but definitely needed for the individual group pages)

// Here's where you'd also import the other middleware

// create the api route

router.get("/")

// remember to export the router too
module.exports = router;

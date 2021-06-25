const express = require("express");

// create router here
const router = express.Router();
// since we're doing db stuff, you'll want some kind of asyncHandler
const asyncHandler = require("express-async-handler");
// Take a second to import the database stuff you'll need

const { Round, Group, GolfCourse } = require("../../db/models");

// require authMiddleware here if needed, (not needed here for the all groups page but definitely needed for the individual group pages)

// Here's where you'd also import the other middleware

// create the api route

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const rounds = await Round.findAll({
      include: {
        model: User,
        as: "host",
      },
    });
    res.json(rounds);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const roundId = parseInt(id);
    const round = await Round.findByPk(roundId, {
      include: {
        model: User,
        as: "host",
      },
    });
    res.json(round);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const roundId = parseInt(id);
    const updatedRound = await Round.update(req.body, {
      where: {
        id: groupId,
      },
    });
    res.json(updatedRound);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const roundId = parseInt(id);
    const round = await Round.findByPk(roundId);
    await round.destroy();
    res.send(200);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    let { courseId, groupId, ruleset, startTime, holes } = req.body;
    hostUserId = Number(hostUserId);
    console.log(hostUserId);
    const newRound = await Round.create({
      courseId,
      groupId,
      ruleset,
      startTime,
      holes,
    });
    res.json(newRound);
  })
);

// remember to export the router too
module.exports = router;

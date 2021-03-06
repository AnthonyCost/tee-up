const express = require("express");

// create router here
const router = express.Router();
// since we're doing db stuff, you'll want some kind of asyncHandler
const asyncHandler = require("express-async-handler");
// Take a second to import the database stuff you'll need

const { Group, User, Round, GolfCourse } = require("../../db/models");

// require authMiddleware here if needed, (not needed here for the all groups page but definitely needed for the individual group pages)

// Here's where you'd also import the other middleware

// create the api route

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const groups = await Group.findAll({
      include: {
        model: User,
        as: "host",
      },
    });
    res.json(groups);
  })
);

router.get(
  "/:id/rounds",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const groupId = parseInt(id);
    const rounds = await Round.findAll(
      {
            where: {
              groupId : groupId
            }, 
              include: [{ model: GolfCourse }], 
          
        }
    );
    res.json(rounds);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const groupId = parseInt(id);
    const group = await Group.findByPk(groupId, {
      include: {
        model: User,
        as: "host",
      },
    });
    res.json(group);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const groupId = parseInt(id);
    const updatedGroup = await Group.update(req.body, {
      where: {
        id: groupId,
      },
    });
    res.json(updatedGroup);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const groupId = parseInt(id);
    const group = await Group.findByPk(groupId);
    await group.destroy();
    res.send(200);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    let { hostUserId, playStyle, description, groupName, imageUrl } = req.body;
    hostUserId = Number(hostUserId);
    const newGroup = await Group.create({
      hostUserId,
      playStyle,
      description,
      groupName,
      imageUrl,
    });
    res.json(newGroup);
  })
);

// remember to export the router too
module.exports = router;

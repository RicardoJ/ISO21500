const Teams = require('../models/teams.model');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const teams = new Teams(req.body);
  await teams.save();
  res.send({ message:'Teams Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const teams = await Teams.findById(id);
  res.send( teams);
});

const find = asyncHandler(async (req, res) => {
  const teams = await Teams.find({});

  res.send( teams);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedTeams = await Teams.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Teams udpated', updatedTeams });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Teams.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

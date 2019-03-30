const Planning = require('../../models/planning/planning.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const planning = new Planning(req.body);
  await planning.save();
  res.send({ message:'Planning Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const planning = await Planning.findById(id);
  res.send( planning);
});

const find = asyncHandler(async (req, res) => {
  const planning = await Planning.find({});

  res.send( planning);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedPlanning = await Planning.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Planning udpated', updatedPlanning });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Planning.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

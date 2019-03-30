const LifeCycle = require('../../models/planning/lifeCycle.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const lifeCycle = new LifeCycle(req.body);
  await lifeCycle.save();
  res.send({ message:'LifeCycle Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const lifeCycle = await LifeCycle.findById(id);
  res.send( lifeCycle);
});

const find = asyncHandler(async (req, res) => {
  const lifeCycle = await LifeCycle.find({});

  res.send( lifeCycle);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedLifeCycle = await LifeCycle.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'LifeCycle udpated', updatedLifeCycle });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await LifeCycle.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

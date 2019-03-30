const Phases = require('../../models/constitution/phases');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const phases = new Phases(req.body);
  await phases.save();
  res.send({ message:'Phases Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const phases = await Phases.findById(id);
  res.send({ message: phases });
});

const find = asyncHandler(async (req, res) => {
  const phases = await Phases.find({});

  res.send({ message: phases });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedPhases = await Phases.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Objective udpated', updatedPhases });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Phases.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

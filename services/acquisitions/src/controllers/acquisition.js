const Acquisition = require('../models/acquisition');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const acquisition = new Acquisition(req.body);
  await acquisition.save();
  res.send({ message:'Acquisition Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const acquisition = await Acquisition.findById(id);
  res.send(acquisition);
});

const find = asyncHandler(async (req, res) => {
  const acquisition = await Acquisition.find({});

  res.send(acquisition);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedAcquisition = await Acquisition.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Acquisition udpated', updatedAcquisition });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Acquisition.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

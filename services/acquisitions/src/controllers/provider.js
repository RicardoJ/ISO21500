const Provider = require('../models/provider');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const provider = new Provider(req.body);
  await provider.save();
  res.send({ message:'Provider Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const provider = await Provider.findById(id);
  res.send({ message: provider });
});

const find = asyncHandler(async (req, res) => {
  const provider = await Provider.find({});

  res.send({ message: provider });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedProvider = await Provider.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Provider udpated', updatedProvider });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Provider.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

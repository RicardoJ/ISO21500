const Hito = require('../../models/constitution/hito');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const hito = new Hito(req.body);
  await hito.save();
  res.send({ message:'Hito Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const hito = await Hito.findById(id);
  res.send({ message: hito });
});

const find = asyncHandler(async (req, res) => {
  const hito = await Hito.find({});

  res.send({ message: hito });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedHito = await Hito.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Hito udpated', updatedHito });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Hito.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

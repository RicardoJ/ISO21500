const Constitution = require('../../models/constitution/constitution.models');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const constitution = new Constitution(req.body);
  await constitution.save();
  res.send('Constitution Created successfully');
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const constitution = await Constitution.findById(id);
  res.send(constitution);
});

const find = asyncHandler(async (req, res) => {
  const constitution = await Constitution.find({});

  res.render(constitution);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedDocument = await Constitution.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Document udpated.', updatedDocument });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Constitution.findByIdAndRemove(id);

  res.send('Deleted successfully!');
});

module.exports = { create, get, find, remove, update };

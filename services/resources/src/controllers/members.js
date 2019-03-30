const Members = require('../models/members.model');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const members = new Members(req.body);
  await members.save();
  res.send({ message:'Members Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const members = await Members.findById(id);
  res.send( members);
});

const find = asyncHandler(async (req, res) => {
  const members = await Members.find({});

  res.send( members);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedMembers = await Members.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Members udpated', updatedMembers });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Members.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

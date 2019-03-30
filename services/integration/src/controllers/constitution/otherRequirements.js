const OtherRequirements = require('../../models/constitution/otherRequirements');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const otherRequirements = new OtherRequirements(req.body);
  await otherRequirements.save();
  res.send({ message:'Other Requirements Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const otherRequirements = await OtherRequirements.findById(id);
  res.send({ message: otherRequirements });
});

const find = asyncHandler(async (req, res) => {
  const otherRequirements = await OtherRequirements.find({});

  res.send({ message: otherRequirements });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedOtherRequirements = await OtherRequirements.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Other Requirements udpated', updatedOtherRequirements });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await OtherRequirements.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

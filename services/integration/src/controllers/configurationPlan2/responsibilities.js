const Responsabilities = require('../../models/configurationPlan2/responsibilities.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const responsibilities = new Responsabilities(req.body);
  await responsibilities.save();
  res.send({ message:'Responsabilities  Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const responsibilities = await Responsabilities.findById(id);
  res.send( responsibilities);
});

const find = asyncHandler(async (req, res) => {
  const responsibilities = await Responsabilities.find({});

  res.send( responsibilities);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedResponsabilities = await Responsabilities.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Responsabilities  udpated', updatedResponsabilities });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Responsabilities.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

const Roles = require('../../models/configurationPlan1/roles.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const roles = new Roles(req.body);
  await roles.save();
  res.send({ message:'Rol Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const roles = await Roles.findById(id);
  res.send( roles);
});

const find = asyncHandler(async (req, res) => {
  const roles = await Roles.find({});

  res.send( roles);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedRoles = await Roles.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Rol udpated', updatedRoles });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Roles.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

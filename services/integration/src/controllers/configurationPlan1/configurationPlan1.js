const ConfigurationPlan1 = require('../../models/configurationPlan1/configurationPlan1.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const configuration1 = new ConfigurationPlan1(req.body);
  await configuration1.save();
  res.send({ message:'Configuration Plan1 Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const configuration1 = await ConfigurationPlan1.findById(id);
  res.send( configuration1);
});

const find = asyncHandler(async (req, res) => {
  const configuration1 = await ConfigurationPlan1.find({});

  res.send( configuration1);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedConfiguration1 = await ConfigurationPlan1.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'ConfigurationPlan1 udpated', updatedConfiguration1 });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await ConfigurationPlan1.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

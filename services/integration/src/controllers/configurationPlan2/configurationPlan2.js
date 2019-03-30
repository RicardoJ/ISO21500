const ConfigurationPlan2 = require('../../models/configurationPlan2/configurationPlan2.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const configurationPlan2 = new ConfigurationPlan2(req.body);
  await configurationPlan2.save();
  res.send({ message:'Item  Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const configurationPlan2 = await ConfigurationPlan2.findById(id);
  res.send( configurationPlan2);
});

const find = asyncHandler(async (req, res) => {
  const configurationPlan2 = await ConfigurationPlan2.find({});

  res.send( configurationPlan2);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedConfiguration2 = await ConfigurationPlan2.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Item  udpated', updatedConfiguration2 });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await ConfigurationPlan2.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

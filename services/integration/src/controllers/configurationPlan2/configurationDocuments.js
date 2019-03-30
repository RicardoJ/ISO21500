const ConfigurationDocuments = require('../../models/configurationPlan2/configurationDocuments.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const configurationDocuments = new ConfigurationDocuments(req.body);
  await configurationDocuments.save();
  res.send({ message:'Configuration Documents  Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const configurationDocuments = await ConfigurationDocuments.findById(id);
  res.send( configurationDocuments);
});

const find = asyncHandler(async (req, res) => {
  const configurationDocuments = await ConfigurationDocuments.find({});

  res.send( configurationDocuments);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedconfigurationDocuments = await ConfigurationDocuments.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Configuration Documents  udpated', updatedconfigurationDocuments });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await ConfigurationDocuments.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

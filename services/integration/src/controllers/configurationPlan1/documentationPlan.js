const DocumentationPlan = require('../../models/configurationPlan1/documentationPlan.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const documentationPlan = new DocumentationPlan(req.body);
  await documentationPlan.save();
  res.send({ message:'Documentation Plan Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const documentationPlan = await DocumentationPlan.findById(id);
  res.send( documentationPlan);
});

const find = asyncHandler(async (req, res) => {
  const documentationPlan = await DocumentationPlan.find({});

  res.send( documentationPlan);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedDocumentationPlan = await DocumentationPlan.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Documentation Plan udpated', updatedDocumentationPlan });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await DocumentationPlan.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

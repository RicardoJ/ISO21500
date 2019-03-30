const Deliverables = require('../../models/configurationPlan2/deliverables.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const deliverables = new Deliverables(req.body);
  await deliverables.save();
  res.send({ message:'Deliverables  Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deliverables = await Deliverables.findById(id);
  res.send( deliverables);
});

const find = asyncHandler(async (req, res) => {
  const deliverables = await Deliverables.find({});

  res.send( deliverables);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedDeliverables = await Deliverables.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Deliverables  udpated', updatedDeliverables });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Deliverables.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

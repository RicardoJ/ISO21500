const Item = require('../../models/configurationPlan1/item.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send({ message:'Item  Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  res.send( item);
});

const find = asyncHandler(async (req, res) => {
  const item = await Item.find({});

  res.send( item);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedItem = await Item.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Item  udpated', updatedItem });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

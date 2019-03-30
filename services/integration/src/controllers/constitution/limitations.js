const Limitations = require('../../models/constitution/limitations');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const limitations = new Limitations(req.body);
  await limitations.save();
  res.send({ message:'Other Requirements Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const limitations = await Limitations.findById(id);
  res.send({ message: limitations });
});

const find = asyncHandler(async (req, res) => {
  const limitations = await Limitations.find({});

  res.send({ message: limitations });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedlimitations = await Limitations.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Other Requirements udpated', updatedlimitations });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Limitations.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

const Documents = require('../../models/planning/documents.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const document = new Documents(req.body);
  await document.save();
  res.send({ message:'Documents Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const document = await Documents.findById(id);
  res.send( document);
});

const find = asyncHandler(async (req, res) => {
  const document = await Documents.find({});

  res.send( document);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedDocument = await Documents.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Documents udpated', updatedDocument });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Documents.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

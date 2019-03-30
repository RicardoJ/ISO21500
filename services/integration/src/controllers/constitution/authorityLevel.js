const AuthorityLevel = require('../../models/constitution/authorityLevel');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const authorityLevel = new AuthorityLevel(req.body);
  await authorityLevel.save();
  res.send({ message:'Authority Level Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const authorityLevel = await AuthorityLevel.findById(id);
  res.send({ message: authorityLevel });
});

const find = asyncHandler(async (req, res) => {
  const authorityLevel = await AuthorityLevel.find({});

  res.send({ message: authorityLevel });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedAuthorityLevel = await AuthorityLevel.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Authority Level udpated', updatedAuthorityLevel });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await AuthorityLevel.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

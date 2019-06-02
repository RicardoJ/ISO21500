const PreviousInformation = require('../../models/previousInformation/PreviousInformation.Model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const previousInformation = new PreviousInformation(req.body);
  await previousInformation.save();
  res.send({ message: 'PreviousInformation Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const previousInformation = await PreviousInformation.find({});

  res.send(previousInformation);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedDocument = await PreviousInformation.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = { create, find, update };

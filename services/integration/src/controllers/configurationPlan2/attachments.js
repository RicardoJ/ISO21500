const Attachments = require('../../models/configurationPlan2/attachments.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const attachments = new Attachments(req.body);
  await attachments.save();
  res.send({ message:'Attachments Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const attachments = await Attachments.findById(id);
  res.send( attachments);
});

const find = asyncHandler(async (req, res) => {
  const attachments = await Attachments.find({});

  res.send( attachments);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedattachments = await Attachments.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Attachments udpated', updatedattachments });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Attachments.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };

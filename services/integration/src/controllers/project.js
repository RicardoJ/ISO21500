const Project = require('../models/project.model');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const project = new Project(req.body);

  await project.save();
  
  res.send({message :'Project Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  const project = await Project.findById(projectId);

  res.send({message : project});
});

const find = asyncHandler(async (req, res) => {
  const project = await Project.find({});

  res.send({message: project});
});

const update = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  const project = await Project.findByIdAndUpdate(projectId, {
    $set: req.body
  });

  res.send({message :'Project udpated.', project});
});

const remove = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  await Project.findByIdAndRemove(projectId);

  res.send({message :'Deleted successfully!'});
});

module.exports = { create, get, find, remove, update };

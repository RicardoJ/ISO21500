const Lesson = require('../models/lesson.model');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const lesson = new Lesson(req.body);

  await lesson.save();
  
  res.send({message :'Lesson Created successfully'});
});

const get = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const lesson = await Lesson.findById(id);
    res.send( lesson );
  });

const find = asyncHandler(async (req, res) => {
  const lesson = await Lesson.find({});

  res.send( lesson);
});

const update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const lesson = await Lesson.findByIdAndUpdate(id, {
      $set: req.body
    });

  res.send({message :'Lesson udpated.', lesson});
});


const remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await Lesson.findByIdAndRemove(id);
  
    res.send({ message: 'Deleted successfully!' });
  });
  

module.exports = { create, get, find, remove, update };

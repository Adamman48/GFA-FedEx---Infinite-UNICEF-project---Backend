const mongoose = require('mongoose');
const { questionSchema } = require('../schemas/schemas');

const Question = mongoose.model('Question', questionSchema);

module.exports = {
  Question,
};

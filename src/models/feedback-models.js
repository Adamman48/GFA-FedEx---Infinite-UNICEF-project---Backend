const mongoose = require('mongoose');
const { questionSchema, answerSchema } = require('../schemas/schemas');

const Question = mongoose.model('Question', questionSchema);
const Answer = mongoose.model('Answer', answerSchema);

module.exports = {
  Question,
  Answer,
};

const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answerText:String,
  answerCounter:Number,
  answersSerialNumber:Number
})

const questionSchema = new mongoose.Schema({
  questionText: String,
  questionSerialNumber: Number,
  answers: [answerSchema]
});

module.exports = {
  questionSchema,
  answerSchema,
};

const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answerText:String,
  answerCount:Number,
  answersSerialNumber:Number,
  questionId: mongoose.Schema.ObjectId
})

const questionSchema = new mongoose.Schema({
  questionAnswerCount: Number,
  questionText: String,
  questionSerialNumber: Number,
});

module.exports = {
  questionSchema,
  answerSchema,
};

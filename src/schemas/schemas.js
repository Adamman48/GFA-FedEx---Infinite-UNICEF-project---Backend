const mongoose = require('mongoose');

const answers = new mongoose.Schema({
  answerText:String,
  answerCounter:Number,
  answersSerialNumber:Number
})

const questions = new mongoose.Schema({
  questionText: String,
  questionSerialNumber: Number,
  answers: [answers]
});

module.exports = {questions};
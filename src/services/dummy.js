const { Question, Answer } = require('../models/feedback-models');

const initQuestion = (requestBody) => 
  new Question({
    questionAnswerCount: 0,
    questionText: requestBody.qText,
    questionSerialNumber: requestBody.qNum,
  });

const initAnswer = (requestBody) =>
  new Answer({
    answerText: requestBody.aText,
    answerCount: 0,
    answersSerialNumber: requestBody.aNum,
    questionId: requestBody.questionId,
  });

module.exports = {
  initQuestion,
  initAnswer,
};

const { Question, Answer } = require('../models/feedback-models');

const initQuestion = (requestBody) => 
  new Question({
    questionAnswerCount: 0,
    questionText: requestBody.qText,
    questionSerialNumber: requestBody.qNum,
  });

const initAnswer = (requestBody, questionId) =>
  new Answer({
    answerText: requestBody.aText,
    answerCount: 0,
    answersSerialNumber: requestBody.aNum,
    questionId: questionId,
  });

module.exports = {
  initQuestion,
  initAnswer,
};

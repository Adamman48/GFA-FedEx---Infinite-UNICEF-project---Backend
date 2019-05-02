const { Question } = require('../models/feedback-models');

const initQuestion = (requestBody) => 
  new Question({
    questionText: `${requestBody.qText}`,
    questionSerialNumber: `${requestBody.qNum}`,
    answers: requestBody.answers
  });

module.exports = {
  initQuestion,
};

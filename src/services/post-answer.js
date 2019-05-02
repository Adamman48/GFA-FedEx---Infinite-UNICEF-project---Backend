const { Question, Answer } = require('../models/feedback-models');

/* const queryHandling = queryCallback => new Promise((resolve, reject) =>
  queryCallback((error, data) =>
    error ? reject(error) :
    resolve(data)
)); */

const updateSingleAnswer = answerId => {
  Answer.updateOne(
    {_id: answerId},
    {$inc: {answerCount: 1}},
    (error, data) => console.log(data));
}

const updateQuestion = questionId => {
  Question.updateOne(
    {_id: questionId},
    {$inc: {questionAnswerCount: 1}},
    (error, data) => console.log(data));
}

const updateStatistics = async (questionId, answerId) => {
  await updateQuestion(questionId);
  await updateSingleAnswer(answerId);
}

module.exports = {
  updateStatistics,
};
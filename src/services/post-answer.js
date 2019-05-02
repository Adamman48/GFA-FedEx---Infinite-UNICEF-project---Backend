const { Question} = require('../models/feedback-models');

/* const queryHandling = queryCallback => new Promise((resolve, reject) =>
  queryCallback((error, data) =>
    error ? reject(error) :
    resolve(data)
)); */

const updateSingleAnswer = answerId => {
  Question.updateOne(
    {_id: "5ccac3cda746a013fcedfbb4", "answers._id": answerId},
    {$inc: {"answers.$.answerCounter": 1}},
    (error, data) => console.log(data));
}

const updateAnswers = answerIdList => {
  answerIdList.forEach(answerId => updateSingleAnswer(answerId))
};

module.exports = {
  updateAnswers,
};